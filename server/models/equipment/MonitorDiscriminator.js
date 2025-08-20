import mongoose from "mongoose";
import Equipment from "./equipmentModel.js";

const monitorSchema = new mongoose.Schema({
  specs: {
    monitorID: {
      type: String,
      required: true,
      unique: true

    },
    resolution: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: true
    },
    refreshRate: {
      type: String,
      required: true
    }
  }
});

const Monitor = Equipment.discriminator('Monitor', monitorSchema);

export default Monitor;
