import Equipment from "../models/equipmentTypeModel.js";

export const createEquipment = async (data) => {
    const { name } = data;
    if (!name) {
        throw new Error("Equipment Type is required");
    }

    const trimmedName = name.trim();
    const existing = await Equipment.findOne({ name: new RegExp(`^${trimmedName}$`, 'i') });
    if (existing) {
        throw new Error(`${trimmedName} equipment is already exists`);
    }

    const equipment = new Equipment({
        name: trimmedName
    });

    return await equipment.save();
};

export const getAllEquipments = async () => {
    return await Equipment.find();

};

export const getEquipment = async (equipmentId) => {
    const equipment = await Equipment.findById(equipmentId);
    if (!equipment) {
        throw new Error("Equipment not found");
    }
    return equipment;

};

export const updateEquipment = async (equipmentId, updateData) => {
    const { name } = updateData;
    if (!name) {
        throw new Error("Equipment type is required");
    }

    const trimmedName = name.trim();

    const existing = await Equipment.findOne({ 
        name: new RegExp(`^${trimmedName}$`, 'i'), 
        _id: { $ne: equipmentId }
    });

    if (existing) {
        throw new Error(`${trimmedName} equipment already exists`);
    }

    const equipment = await Equipment.findByIdAndUpdate(
        equipmentId,
        { name: trimmedName },
        { new: true, runValidators: true }
    );

    if (!equipment) {
        throw new Error("Equipment not found");
    }

    return equipment;
};

export const deleteEquipment = async (equipmentId) => {
    const equipment = await Equipment.findByIdAndDelete(equipmentId);
    if (!equipment) {
        throw new Error("Equipment not found");
    }
    return {
        message: "Equipment deleted successfully",
        name: equipment.name
    };
};
