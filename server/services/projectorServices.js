import {  Projector } from "../models/equipment/labEquipment.js";
import EquipmentType from "../models/equipmentTypeModel.js";
import Lab from "../models/labModel.js";
export const createProjector = async (data) => {
    const { lab, equipmentType, brand, status, addDate, projectorID, connectivity, resolution } = data;
    if (!lab || !equipmentType || !brand || !projectorID || !connectivity || !resolution) {
        throw new Error("All fields are required");
    };
    const trimmedProjectorID = projectorID.trim().replace(/\s+/g, "");
    const existingProjector = await Projector.findOne({ projectorID: new RegExp(`^${trimmedProjectorID}$`, 'i') });
    if (existingProjector) {
        throw new Error("Projector is already exists");
    }

    const existingLab = await Lab.findById(lab);
    if (!existingLab) {
        throw new Error("Projector Should have the Lab");
    }

    const existingEquipmentType = await EquipmentType.findById(equipmentType);
    if (!existingEquipmentType) {
        throw new Error("Projector Should have the Equipment type");
    }

    const projector = new Projector({
        projectorID: trimmedProjectorID,
        lab,
        equipmentType,
        brand,
        status,
        addDate,
        specs: {
            connectivity,
            resolution
        }
    });
    return await projector.save();
};

export const getAllProjectors = async () => {
    return await Projector.find()
        .populate('lab')
        .populate('equipmentType')
        .exec();
};

export const getProjector = async (projectorId) => {
    const projector = await Projector.findById(projectorId)
        .populate('lab')
        .populate('equipmentType')
        .exec();
    return projector;
};

export const updateProjector = async (projectorId, updateData) => {
    const { lab, equipmentType, brand, status, addDate, projectorID, connectivity, resolution, specs } = updateData;
    const updateFields = {
        ...(lab && { lab }),
        ...(equipmentType && { equipmentType }),
        ...(brand && { brand }),
        ...(status && { status }),
        ...(addDate && { addDate }),
        ...(projectorID && { projectorID: projectorID.trim().replace(/\s+/g, "") }),
    };

    if (specs) {
        if (specs.connectivity) updateFields["specs.connectivity"] = specs.connectivity;
        if (specs.resolution) updateFields["specs.resolution"] = specs.resolution;
    } else {
        if (connectivity) updateFields["specs.connectivity"] = connectivity;
        if (resolution) updateFields["specs.resolution"] = resolution;

    }

    const updatedProjector = await Projector.findByIdAndUpdate(
        projectorId,
        updateFields,
        { new: true }
    )
        .populate("lab")
        .populate("equipmentType");

    return updatedProjector;

};

export const deleteProjector = async (projectorId) => {
    const projector = await Projector.findByIdAndDelete(projectorId);
    if (!projectorId) {
        throw new Error("Projector is not found");
    }

    return {
        message: "Projector deleted successfully"
    };
};