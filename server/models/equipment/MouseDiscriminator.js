import mongoose from "mongoose";
import Equipment from "./equipmentModel.js";

const mouseSchema = new mongoose.Schema({
      mouseID: {
        type: String,
        required: true,
        unique: true
    },
    specs: {
        type: { type: String },
        connectivity: { type: String }
    }
});

const Mouse = Equipment.discriminator('Mouse', mouseSchema);
export default Mouse;