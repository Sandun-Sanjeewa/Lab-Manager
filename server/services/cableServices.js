import { Equipment, Cable } from "../models/equipment/labEquipment.js";
import EquipmentType from "../models/equipmentTypeModel.js";
import Lab from "../models/labModel.js";
export const createCable = async (data) => {
    const { lab, equipmentType, brand, status, addDate, cableID, length, type } = data;
    if (!lab || !equipmentType || !brand || !cableID || !length || !type) {
        throw new Error("All fields are required");
    };
    const trimmedCableID = cableID.trim().replace(/\s+/g, "");
    const existingCable = await Cable.findOne({ cableID: new RegExp(`^${trimmedCableID}$`, 'i') });
    if (existingCable) {
        throw new Error("Cable is already exists");
    }

    const existingLab = await Lab.findById(lab);
    if (!existingLab) {
        throw new Error("Cable Should have the Lab");
    }

    const existingEquipmentType = await EquipmentType.findById(equipmentType);
    if (!existingEquipmentType) {
        throw new Error("Cable Should have the Equipment type");
    }

    const cable = new Cable({
        cableID: trimmedCableID,
        lab,
        equipmentType,
        brand,
        status,
        addDate,
        specs: {
            length,
            type
        }
    });
    return await cable.save();
};

export const getAllCables = async () => {
    return await Cable.find()
        .populate('lab')
        .populate('equipmentType')
        .exec();
};

export const getCable = async (cableId) => {
    const cable = await Cable.findById(cableId)
        .populate('lab')
        .populate('equipmentType')
        .exec();
    return cable;
};

export const updateCable = async (cableId, updateData) => {
    const { lab, equipmentType, brand, status, addDate, cableID, length, type, specs } = updateData;
    const updateFields = {
        ...(lab && { lab }),
        ...(equipmentType && { equipmentType }),
        ...(brand && { brand }),
        ...(status && { status }),
        ...(addDate && { addDate }),
        ...(cableID && { cableID: cableID.trim().replace(/\s+/g, "") }),
    };

    if (specs) {
        if (specs.length) updateFields["specs.length"] = specs.length;
        if (specs.type) updateFields["specs.type"] = specs.type;
    } else {
        if (length) updateFields["specs.length"] = length;
        if (type) updateFields["specs.type"] = type;

    }

    const updatedCable = await Cable.findByIdAndUpdate(
        cableId,
        updateFields,
        { new: true }
    )
        .populate("lab")
        .populate("equipmentType");

    return updatedCable;

};

export const deleteCable = async (cableId) => {
    const cable = await Cable.findByIdAndDelete(cableId);
    if (!cable) {
        throw new Error("Cable is not found");
    }

    return {
        message: "Cable deleted successfully"
    };
};