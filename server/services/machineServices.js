import { Equipment, Machine } from "../models/equipment/labEquipment.js";
import EquipmentType from "../models/equipmentTypeModel.js";
import Lab from "../models/labModel.js";



export const createMachine = async (data) => {
    const { machineID, lab, equipmentType, brand, status, addDate, os, ram, processor } = data;

    if (!machineID || !lab || !equipmentType || !brand || !os || !ram || !processor) {
        throw new Error("All fields are required");
    }

    const trimmedMachineID = machineID.trim().replace(/\s+/g, "");


    const existingMachine = await Machine.findOne({ machineID: new RegExp(`^${trimmedMachineID}$`, 'i') });
    if (existingMachine) {
        throw new Error("MachineID is already exists");
    }

    const existingLab = await Lab.findById(lab);
    if (!existingLab) {
        throw new Error("Machine Should have the Lab");
    }

    const existingEquipmentType = await EquipmentType.findById(equipmentType);
    if (!existingEquipmentType) {
        throw new Error("Machine Should have the Equipment type");
    }

    const machine = new Machine({
        machineID: trimmedMachineID,
        lab,
        equipmentType,
        brand,
        status,
        addDate,
        specs: {
            os,
            ram,
            processor
        }
    });

    return await machine.save();

};

export const getAllMachines = async () => {
    return await Machine.find()
        .populate('lab')
        .populate('equipmentType')
        .exec();
};


export const getMachine = async (machineId) => {
    const machine = await Machine.findById(machineId)
        .populate('lab')
        .populate('equipmentType')
        .exec();
    return machine;
};


export const updateMachine = async (machineId, updateData) => {
    const { lab, equipmentType, brand, status, addDate, machineID, os, ram, processor, specs } = updateData;

    const updateFields = {
        ...(lab && { lab }),
        ...(equipmentType && { equipmentType }),
        ...(brand && { brand }),
        ...(status && { status }),
        ...(addDate && { addDate }),
        ...(machineID && { machineID: machineID.trim().replace(/\s+/g, "") }),
    };

    if (specs) {
        if (specs.os) updateFields["specs.os"] = specs.os;
        if (specs.ram) updateFields["specs.ram"] = specs.ram;
        if (specs.processor) updateFields["specs.processor"] = specs.processor;
    } else {
        if (os) updateFields["specs.os"] = os;
        if (ram) updateFields["specs.ram"] = ram;
        if (processor) updateFields["specs.processor"] = processor;
    }

    const updatedMachine = await Machine.findByIdAndUpdate(
        machineId,
        updateFields,
        { new: true }
    )
        .populate("lab")
        .populate("equipmentType");

    return updatedMachine;
};

export const deleteMachine = async(machineId)=>{
    const machine = await Machine.findByIdAndDelete(machineId);
    if(!machineId){
        throw new Error ("Machine is not found");
    }

    return {
        message:"Machine deleted successfully"
    };
};
