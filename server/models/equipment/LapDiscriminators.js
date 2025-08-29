import mongoose from "mongoose";
import Equipment from "./equipmentModel.js";

const lapSchema = new mongoose.Schema({
    lapID: {
        type: String,
        required: true,
        unique: true
    },
    specs: {
        os: {
            type: String,
            required: true
        },
        ram: {
            type: String,
            required: true
        },
        processor: {
            type: String,
            required: true
        },
        storage: {
            type: String,
            required: true
        },

        batteryHealth: {
            type: String,
            enum: [ "Good","Weak"],
            default: "Good",
            required: true
        },
    }
});

const Lap = Equipment.discriminator('Lap', lapSchema);
export default Lap;