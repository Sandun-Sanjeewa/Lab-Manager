import mongoose from "mongoose";
import Equipment from "./equipmentModel.js";

const keyboardSchema = new mongoose.Schema({
    keyboardID: {
        type: String,
        required: true,
        unique: true
    },
    specs: {
        type: { type: String },
        connectivity: { type: String }
    }
});

const Keyboard = Equipment.discriminator('Keyboard', keyboardSchema);
export default Keyboard;