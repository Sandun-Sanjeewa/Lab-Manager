import mongoose from "mongoose";

const equipmentTypeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    }
},{ timestamps: true });

const Equipment = mongoose.model('Equipment', equipmentTypeSchema);
export default Equipment;
