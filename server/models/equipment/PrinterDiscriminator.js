import mongoose from "mongoose";
import Equipment from "./equipmentModel.js";
const printerSchema = new mongoose.Schema({
   printerID: {
      type: String,
      required: true,
      unique: true

    },
  specs: {
    printerType: { type: String, required: true },  
    colorSupport: { type: Boolean, required: true },
    maxResolution: { type: String }
  }
});

const Printer = Equipment.discriminator('Printer', printerSchema);

export default Printer;