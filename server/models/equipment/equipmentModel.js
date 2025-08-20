import mongoose from "mongoose";

const equipmentSchema = new mongoose.Schema({
    lab:{type:mongoose.Schema.Types.ObjectId, ref: 'Lab', required:true},
    equipmentType:{type:mongoose.Schema.Types.ObjectId, ref:'EquipmentType',required:true},
    brand: {
        type: String, 
        required: true
    },
    status:{
        type: String,
        enum: ["In Use", "Available", "Repair"],
        default: "Available"
    },
    addDate:{
        type:Date,
        default: Date.now
    }
},
{
    discriminatorKey: 'type',
    collection:"equipments",
    timestamps:true

});
const Equipment = mongoose.model('Equipment', equipmentSchema);
export default Equipment;