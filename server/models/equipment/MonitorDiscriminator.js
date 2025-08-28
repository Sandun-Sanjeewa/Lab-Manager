import mongoose from "mongoose";
import Equipment from "./equipmentModel.js";

const monitorSchema = new mongoose.Schema({
    monitorID: {
      type: String,
      required: true,
      unique: true

    },

  specs: {
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
