import { Equipment, Keyboard } from "../models/equipment/labEquipment.js";
import EquipmentType from "../models/equipmentTypeModel.js";
import Lab from "../models/labModel.js";
export const createKeyboard = async (data) => {
    const { lab, equipmentType, brand, status, addDate, keyboardID, connectivity, type } = data;
    if (!lab || !equipmentType || !brand || !keyboardID || !connectivity || !type) {
        throw new Error("All fields are required");
    };
    const trimmedKeyboardID = keyboardID.trim().replace(/\s+/g, "");
    const existingKeyboard = await Keyboard.findOne({ keyboardID: new RegExp(`^${trimmedKeyboardID}$`, 'i') });
    if (existingKeyboard) {
        throw new Error("Keyboard is already exists");
    } 
    

    const existingLab = await Lab.findById(lab);
    if (!existingLab) {
        throw new Error("Keyboard Should have the Lab");
    }

    const existingEquipmentType = await EquipmentType.findById(equipmentType);
    if (!existingEquipmentType) {
        throw new Error("Keyboard Should have the Equipment type");
    }

    const keyboard = new Keyboard({
        keyboardID: trimmedKeyboardID,
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
    return await keyboard.save();
};

export const getAllKeyboards = async () => {
    return await Keyboard.find()
        .populate('lab')
        .populate('equipmentType')
        .exec();
};

export const getKeyboard = async (keyboardId) => {
    const keyboard = await Keyboard.findById(keyboardId)
        .populate('lab')
        .populate('equipmentType')
        .exec();
    return keyboard;
};

export const updateKeyboard = async (keyboardId, updateData) => {
    const { lab, equipmentType, brand, status, addDate, keyboardID, connectivity, type, specs } = updateData;
    const updateFields = {
        ...(lab && { lab }),
        ...(equipmentType && { equipmentType }),
        ...(brand && { brand }),
        ...(status && { status }),
        ...(addDate && { addDate }),
        ...(keyboardID && { keyboardID: keyboardID.trim().replace(/\s+/g, "") }),
    };

    if (specs) {
        if (specs.connectivity) updateFields["specs.connectivity"] = specs.connectivity;
        if (specs.type) updateFields["specs.type"] = specs.type;
    } else {
        if (connectivity) updateFields["specs.connectivity"] = connectivity;
        if (type) updateFields["specs.type"] = type;

    }

    const updatedKeyboard = await Keyboard.findByIdAndUpdate(
        keyboardId,
        updateFields,
        { new: true }
    )
        .populate("lab")
        .populate("equipmentType");

    return updatedKeyboard;

};

export const deleteKeyboard = async (keyboardId) => {
    const keyboard = await Keyboard.findByIdAndDelete(keyboardId);
    if (!keyboard) {
        throw new Error("Keyboard is not found");
    }

    return {
        message: "Keyboard deleted successfully"
    };
};