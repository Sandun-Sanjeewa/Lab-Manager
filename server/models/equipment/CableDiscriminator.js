import mongoose from "mongoose";
import Equipment from "./equipmentModel.js";

const cableSchema = new mongoose.Schema({
       mouseID: {
        type: String,
        required: true,
        unique: true
    },
    specs: {
        type: { type: String },
        length: { type: String },
    }
});

const Cable = Equipment.discriminator('Cable', cableSchema);
export default Cable;