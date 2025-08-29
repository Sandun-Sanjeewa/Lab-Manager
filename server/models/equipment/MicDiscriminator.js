import mongoose from "mongoose";
import Equipment from "./equipmentModel.js";

const micSchema = new mongoose.Schema({
    micID: {
        type: String,
        required: true,
        unique: true
    },
    specs: {
        type: { type: String },
        connectivity: { type: String }
    }
});

const Mic = Equipment.discriminator('Mic', micSchema);
export default Mic;