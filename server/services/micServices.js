import { Equipment, Mic } from "../models/equipment/labEquipment.js";
import EquipmentType from "../models/equipmentTypeModel.js";
import Lab from "../models/labModel.js";
export const createMic = async (data) => {
    const { lab, equipmentType, brand, status, addDate, micID, connectivity, type } = data;
    if (!lab || !equipmentType || !brand || !micID || !connectivity || !type) {
        throw new Error("All fields are required");
    };
    const trimmedMicID = micID.trim().replace(/\s+/g, "");
    const existingMic = await Mic.findOne({ micID: new RegExp(`^${trimmedMicID}$`, 'i') });
    if (existingMic) {
        throw new Error("Mic is already exists");
    }

    const existingLab = await Lab.findById(lab);
    if (!existingLab) {
        throw new Error("Mic Should have the Lab");
    }

    const existingEquipmentType = await EquipmentType.findById(equipmentType);
    if (!existingEquipmentType) {
        throw new Error("Mic Should have the Equipment type");
    }

    const mic = new Mic({
        micID: trimmedMicID,
        lab,
        equipmentType,
        brand,
        status,
        addDate,
        specs: {
            connectivity,
            type
        }
    });
    return await mic.save();
};

export const getAllMics = async () => {
    return await Mic.find()
        .populate('lab')
        .populate('equipmentType')
        .exec();
};

export const getMic = async (micId) => {
    const Mic = await Mic.findById(micId)
        .populate('lab')
        .populate('equipmentType')
        .exec();
    return Mic;
};

export const updateMic = async (micId, updateData) => {
    const { lab, equipmentType, brand, status, addDate, micID, connectivity, type, specs } = updateData;
    const updateFields = {
        ...(lab && { lab }),
        ...(equipmentType && { equipmentType }),
        ...(brand && { brand }),
        ...(status && { status }),
        ...(addDate && { addDate }),
        ...(micID && { micID: micID.trim().replace(/\s+/g, "") }),
    };

    if (specs) {
        if (specs.connectivity) updateFields["specs.connectivity"] = specs.connectivity;
        if (specs.type) updateFields["specs.type"] = specs.type;
    } else {
        if (connectivity) updateFields["specs.connectivity"] = connectivity;
        if (type) updateFields["specs.type"] = type;

    }

    const updatedMic = await Mic.findByIdAndUpdate(
        micId,
        updateFields,
        { new: true }
    )
        .populate("lab")
        .populate("equipmentType");

    return updatedMic;

};

export const deleteMic = async (micId) => {
    const Mic = await Mic.findByIdAndDelete(micId);
    if (!micId) {
        throw new Error("Mic is not found");
    }

    return {
        message: "Mic deleted successfully"
    };
};