import { Equipment, Lap } from "../models/equipment/labEquipment.js";
import EquipmentType from "../models/equipmentTypeModel.js";
import Lab from "../models/labModel.js";



export const createLap = async (data) => {
    const { lapID, lab, equipmentType, brand, status, addDate, os, ram, processor, storage, batteryHealth } = data;

    if (!lapID || !lab || !equipmentType || !brand || !os || !ram || !processor || !storage) {
        throw new Error("All fields are required");
    }

    const trimmedLapID = lapID.trim().replace(/\s+/g, "");


    const existingLap = await Lap.findOne({ lapID: new RegExp(`^${trimmedLapID}$`, 'i') });
    if (existingLap) {
        throw new Error("lap is already exists");
    }

    const existingLab = await Lab.findById(lab);
    if (!existingLab) {
        throw new Error("Lap Should have the Lab");
    }

    const existingEquipmentType = await EquipmentType.findById(equipmentType);
    if (!existingEquipmentType) {
        throw new Error("Lap Should have the Equipment type");
    }

    const lap = new Lap({
        lapID: trimmedLapID,
        lab,
        equipmentType,
        brand,
        status,
        addDate,
        specs: {
            os,
            ram,
            processor,
            storage,
            batteryHealth
        }
    });

    return await lap.save();

};

export const getAllLaps = async () => {
    return await Lap.find()
        .populate('lab')
        .populate('equipmentType')
        .exec();
};


export const getLap = async (lapId) => {
    const lap = await Lap.findById(lapId)
        .populate('lab')
        .populate('equipmentType')
        .exec();
    return lap;
};


export const updateLap = async (lapId, updateData) => {
    const { lab, equipmentType, brand, status, addDate, lapID, os, ram, processor, storage, batteryHealth, specs } = updateData;

    const updateFields = {
        ...(lab && { lab }),
        ...(equipmentType && { equipmentType }),
        ...(brand && { brand }),
        ...(status && { status }),
        ...(addDate && { addDate }),
        ...(lapID && { lapID: lapID.trim().replace(/\s+/g, "") }),
    };

    if (specs) {
        if (specs.os) updateFields["specs.os"] = specs.os;
        if (specs.ram) updateFields["specs.ram"] = specs.ram;
        if (specs.processor) updateFields["specs.processor"] = specs.processor;
        if (specs.storage) updateFields["specs.storage"] = specs.storage;
        if (specs.batteryHealth) updateFields["specs.batteryHealth"] = specs.batteryHealth;
    } else {
        if (os) updateFields["specs.os"] = os;
        if (ram) updateFields["specs.ram"] = ram;
        if (processor) updateFields["specs.processor"] = processor;
        if (storage) updateFields["specs.storage"] = storage;
         if (batteryHealth) updateFields["specs.batteryHealth"] = batteryHealth;
    }

    const updatedLap = await Lap.findByIdAndUpdate(
        lapId,
        updateFields,
        { new: true }
    )
        .populate("lab")
        .populate("equipmentType");

    return updatedLap;
};

export const deleteLap = async (lapId) => {
    const lap = await Lap.findByIdAndDelete(lapId);
    if (!lapId) {
        throw new Error("Lap is not found");
    }

    return {
        message: "Lap deleted successfully"
    };
};
