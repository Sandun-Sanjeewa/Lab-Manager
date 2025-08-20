import mongoose from "mongoose";

const equipmentTypeSchema = new mongoose.Schema({
    equipmenttype: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });

const EquipmentType = mongoose.model('EquipmentType', equipmentTypeSchema);
export default EquipmentType;
