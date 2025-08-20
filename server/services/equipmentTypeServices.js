import EquipmentType from "../models/equipmentTypeModel.js";

export const createEquipmentType = async (data) => {
    const { equipmenttype } = data;
    if (!equipmenttype) {
        throw new Error("Equipment Type is required");
    }

    const trimmedName = equipmenttype.trim();
    const existing = await EquipmentType.findOne({ equipmenttype: new RegExp(`^${trimmedName}$`, 'i') });
    if (existing) {
        throw new Error(`${trimmedName} equipment type is already exists`);
    }

    const equipmentType = new EquipmentType({
        equipmenttype: trimmedName
    });

    return await equipmentType.save();
};

export const getAllEquipmentTypes = async () => {
    return await EquipmentType.find();

};

export const getEquipmentType = async (equipmentTypeId) => {
    const equipmentType = await EquipmentType.findById(equipmentTypeId);
    if (!equipmentType) {
        throw new Error("Equipment type not found");
    }
    return equipmentType;

};

export const updateEquipmentType = async (equipmentTypeId, updateData) => {
    const { equipmenttype } = updateData;
    if (!equipmenttype) {
        throw new Error("Equipment type is required");
    }

    const trimmedName = equipmenttype.trim();

    const existing = await EquipmentType.findOne({ 
        equipmenttype: new RegExp(`^${trimmedName}$`, 'i'), 
        _id: { $ne: equipmentTypeId }
    });

    if (existing) {
        throw new Error(`${trimmedName} equipmentType already exists`);
    }

    const equipmentType = await EquipmentType.findByIdAndUpdate(
        equipmentTypeId,
        { equipmenttype: trimmedName },
        { new: true, runValidators: true }
    );

    if (!equipmentType) {
        throw new Error("Equipment Type not found");
    }

    return equipmentType;
};

export const deleteEquipmentType = async (equipmentTypeId) => {
    const equipmentType = await EquipmentType.findByIdAndDelete(equipmentTypeId);
    if (!equipmentType) {
        throw new Error("Equipment type not found");
    }
    return {
        message: "Equipment type deleted successfully",
        equipmenttype: equipmentType.equipmenttype
    };
};

