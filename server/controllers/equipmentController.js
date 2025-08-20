import * as machineServices from '../services/machineServices.js';


export const createMachine = async (req,res) =>{
    try {
        const machine = await machineServices.createMachine(req.body);
        res.status(201).json(machine);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

export const getAllMachines = async(req,res) =>{
    try {
        const machines = await machineServices.getAllMachines();
        res.status(200).json(machines);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

export const getMachine = async(req,res) =>{
    try {
        const machine = await machineServices.getMachine(req.params.id);
        res.status(200).json(machine);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

export const updateMachine = async(req,res) =>{
    try {
        const updatedMachine = await machineServices.updateMachine(req.params.id, req.body);
        res.status(200).json(updatedMachine);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

export const deleteMachine = async(req,res)=>{
    try {
        const deletedMachine = await machineServices.deleteMachine(req.params.id)
        res.status(200).json(deletedMachine);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};