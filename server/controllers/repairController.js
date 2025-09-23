import * as repairServices from "../services/repairServices.js";

export const createRepair = async(req,res) =>{
    try {
        const repair = await repairServices.createRepair(req.body);
        res.status(202).json(repair);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

};

export const getAllRepairs = async(req,res)=>{
    try {
        const repairs = await repairServices.getAllRepairs();
        res.status(200).json(repairs);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getRepair=async(req,res)=>{
    try {
        const repair = await repairServices.getRepair(req.params.id)
        res.status(200).json(repair);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

export const updateRepair=async(req,res)=>{
    try {
        const updatedRepair = await repairServices.updateRepair(req.params.id,req.body);
        res.status(200).json(updatedRepair);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

export const deleteRepair = async(req,res)=>{
    try {
        const deletedRepair = await repairServices.deleteRepair(req.params.id);
        res.status(200).json(deletedRepair);
    } catch (error) {
         res.status(400).json({error:error.message});
    }
};