import mongoose from "mongoose";
import Equipment from "./equipmentModel.js";

const scanerSchema = new mongoose.Schema({
    scanerID: {
        type: String,
        required: true,
        unique: true
    },
    specs: {
        connectivity: { type: String },
        resolution: { type: String },
    }
});

const Scaner = Equipment.discriminator('Scaner', scanerSchema);
export default Scaner;