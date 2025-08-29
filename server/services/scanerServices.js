import { Equipment, Scaner } from "../models/equipment/labEquipment.js";
import EquipmentType from "../models/equipmentTypeModel.js";
import Lab from "../models/labModel.js";
export const createScaner = async (data) => {
    const { lab, equipmentType, brand, status, addDate, scanerID, connectivity, resolution } = data;
    if (!lab || !equipmentType || !brand || !scanerID || !connectivity || !resolution) {
        throw new Error("All fields are required");
    };
    const trimmedScanerID = scanerID.trim().replace(/\s+/g, "");
    const existingScaner = await Scaner.findOne({ scanerID: new RegExp(`^${trimmedScanerID}$`, 'i') });
    if (existingScaner) {
        throw new Error("Scaner is already exists");
    }

    const existingLab = await Lab.findById(lab);
    if (!existingLab) {
        throw new Error("Scaner Should have the Lab");
    }

    const existingEquipmentType = await EquipmentType.findById(equipmentType);
    if (!existingEquipmentType) {
        throw new Error("Scaner Should have the Equipment type");
    }

    const scaner = new Scaner({
        scanerID: trimmedScanerID,
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
    return await scaner.save();
};

export const getAllScaners = async () => {
    return await Scaner.find()
        .populate('lab')
        .populate('equipmentType')
        .exec();
};

export const getScaner = async (scanerId) => {
    const scaner = await Scaner.findById(scanerId)
        .populate('lab')
        .populate('equipmentType')
        .exec();
    return scaner;
};

export const updateScaner = async (scanerId, updateData) => {
    const { lab, equipmentType, brand, status, addDate, scanerID, connectivity, resolution, specs } = updateData;
    const updateFields = {
        ...(lab && { lab }),
        ...(equipmentType && { equipmentType }),
        ...(brand && { brand }),
        ...(status && { status }),
        ...(addDate && { addDate }),
        ...(scanerID && { scanerID: scanerID.trim().replace(/\s+/g, "") }),
    };

    if (specs) {
        if (specs.connectivity) updateFields["specs.connectivity"] = specs.connectivity;
        if (specs.resolution) updateFields["specs.resolution"] = specs.resolution;
    } else {
        if (connectivity) updateFields["specs.connectivity"] = connectivity;
        if (resolution) updateFields["specs.resolution"] = resolution;

    }

    const updatedScaner = await Scaner.findByIdAndUpdate(
        scanerId,
        updateFields,
        { new: true }
    )
        .populate("lab")
        .populate("equipmentType");

    return updatedScaner;

};

export const deleteScaner = async (scanerId) => {
    const scaner = await Scaner.findByIdAndDelete(scanerId);
    if (!scanerId) {
        throw new Error("Scaner is not found");
    }

    return {
        message: "Scaner deleted successfully"
    };
};