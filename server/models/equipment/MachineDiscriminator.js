import mongoose from "mongoose";
import Equipment from "./equipmentModel.js";

const machineSchema = new mongoose.Schema({
     machineID : {
            type: String,
            required: true,
            unique: true
            
        },
        
    specs: {
        os: {
            type: String,
            required: true
        },
        ram:{
            type: String,
            required: true
        },
        processor:{
            type: String,
            required: true
        }

    }
});
const Machine = Equipment.discriminator('Machine', machineSchema);
export default Machine;