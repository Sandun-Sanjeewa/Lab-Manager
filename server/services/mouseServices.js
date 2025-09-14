import { Equipment, Mouse } from "../models/equipment/labEquipment.js";
import EquipmentType from "../models/equipmentTypeModel.js";
import Lab from "../models/labModel.js";
export const createMouse = async (data) => {
    const { lab, equipmentType, brand, status, addDate, mouseID, connectivity, type } = data;
    if (!lab || !equipmentType || !brand || !mouseID || !connectivity || !type) {
        throw new Error("All fields are required");
    };
    const trimmedMouseID = mouseID.trim().replace(/\s+/g, "");
    const existingMouse = await Mouse.findOne({ mouseID: new RegExp(`^${trimmedMouseID}$`, 'i') });
    if (existingMouse) {
        throw new Error("Mouse is already exists");
    }

    const existingLab = await Lab.findById(lab);
    if (!existingLab) {
        throw new Error("Mouse Should have the Lab");
    }

    const existingEquipmentType = await EquipmentType.findById(equipmentType);
    if (!existingEquipmentType) {
        throw new Error("Mouse Should have the Equipment type");
    }

    const mouse = new Mouse({
        mouseID: trimmedMouseID,
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
    return await mouse.save();
};

export const getAllMouses = async () => {
    return await Mouse.find()
        .populate('lab')
        .populate('equipmentType')
        .exec();
};

export const getMouse = async (mouseId) => {
    const mouse = await Mouse.findById(mouseId)
        .populate('lab')
        .populate('equipmentType')
        .exec();
    return mouse;
};

export const updateMouse = async (mouseId, updateData) => {
    const { lab, equipmentType, brand, status, addDate, mouseID, connectivity, type, specs } = updateData;
    const updateFields = {
        ...(lab && { lab }),
        ...(equipmentType && { equipmentType }),
        ...(brand && { brand }),
        ...(status && { status }),
        ...(addDate && { addDate }),
        ...(mouseID && { mouseID: mouseID.trim().replace(/\s+/g, "") }),
    };

    if (specs) {
        if (specs.connectivity) updateFields["specs.connectivity"] = specs.connectivity;
        if (specs.type) updateFields["specs.type"] = specs.type;
    } else {
        if (connectivity) updateFields["specs.connectivity"] = connectivity;
        if (type) updateFields["specs.type"] = type;

    }

    const updatedMouse = await Mouse.findByIdAndUpdate(
        mouseId,
        updateFields,
        { new: true }
    )
        .populate("lab")
        .populate("equipmentType");

    return updatedMouse;

};

export const deleteMouse = async (mouseId) => {
    const mouse = await Mouse.findByIdAndDelete(mouseId);
    if (!mouse) {
        throw new Error("Mouse is not found");
    }

    return {
        message: "Mouse deleted successfully"
    };
};