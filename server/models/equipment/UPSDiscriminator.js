import mongoose from "mongoose";
import Equipment from "./equipmentModel.js";

const upsSchema = new mongoose.Schema({
  upsID: {
    type: String,
    required: true,
    unique: true

  },
  specs: {
    capacity: {
      type: String,
      required: true
    },
    batteryHealth: {
      type: String,
      enum: ["Good", "Weak"],
      default: "Good",
      required: true
    },
  }
});

const UPS = Equipment.discriminator('UPS', upsSchema);

export default UPS;

