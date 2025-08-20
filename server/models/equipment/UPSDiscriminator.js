import mongoose from "mongoose";
import Equipment from "./equipmentModel.js";

const upsSchema = new mongoose.Schema({
  specs: {
    capacity: { type: String, required: true },
    batteryType: { type: String, required: true }
  }
});

const UPS = Equipment.discriminator('UPS', upsSchema);

export default UPS;

