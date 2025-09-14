import Printer from "../models/equipment/PrinterDiscriminator.js";
import EquipmentType from "../models/equipmentTypeModel.js";
import Lab from "../models/labModel.js";

export const createPrinter = async (data) => {
    const { printerID, lab, equipmentType, brand, status, addDate, printerType, colorSupport, maxResolution } = data;
    if (!printerID || !lab || !equipmentType || !brand || !printerType || !maxResolution) {
        throw new Error("All fields are required");
    };
    const trimmedPrinterID = printerID.trim().replace(/\s+/g, "");
    const existingPrinter = await Printer.findOne({ printerID: new RegExp(`^${trimmedPrinterID}$`, 'i') });
    if (existingPrinter) {
        throw new Error("PrinterID is already exists");
    }

    const existingLab = await Lab.findById(lab);
    if (!existingLab) {
        throw new Error("Printer Should have the Lab");
    }

    const existingEquipmentType = await EquipmentType.findById(equipmentType);
    if (!existingEquipmentType) {
        throw new Error("Printer Should have the Equipment type");
    }

    const printer = new Printer({
        printerID: trimmedPrinterID,
        lab,
        equipmentType,
        brand,
        status,
        addDate,
        specs: {
            printerType,
            colorSupport,
            maxResolution
        }
    });

    return await printer.save();

};

export const getAllPrinters = async () => {
    return await Printer.find()
        .populate('lab')
        .populate('equipmentType')
        .exec();
};

export const getPrinter = async (printerId) => {
    const printer = await Printer.findById(printerId)
        .populate('lab')
        .populate('equipmentType')
        .exec();
    return printer;
};

export const updatePrinter = async (printerId, updateData) => {
    const { lab, equipmentType, brand, status, addDate, printerID, printerType, colorSupport, maxResolution, specs } = updateData;
    const updateFields = {
        ...(lab && { lab }),
        ...(equipmentType && { equipmentType }),
        ...(brand && { brand }),
        ...(status && { status }),
        ...(addDate && { addDate }),
        ...(printerID && { printerID: printerID.trim().replace(/\s+/g, "") }),
    };

      if (specs) {
        if (specs.printerType) updateFields["specs.printerType"] = specs.printerType;
        if (specs.colorSupport) updateFields["specs.colorSupport"] = specs.colorSupport;
        if (specs.maxResolution) updateFields["specs.maxResolution"] = specs.maxResolution;
    } else {
        if (printerType) updateFields["specs.printerType"] = printerType;
        if (colorSupport) updateFields["specs.colorSupport"] = colorSupport;
        if (maxResolution) updateFields["specs.maxResolution"] = maxResolution;
    }

    const updatedPrinter = await Printer.findByIdAndUpdate(
      printerId,
        updateFields,
        { new: true }
    )
        .populate("lab")
        .populate("equipmentType");

    return updatedPrinter;

};

export const deletePrinter = async(printerId)=>{
    const printer = await Printer.findByIdAndDelete(printerId);
    if(!printer){
        throw new Error ("Printer is not found");
    }

    return {
        message:"Printer deleted successfully"
    };
};