import * as labServices from '../services/labServices.js';

export const createLab = async (req,res)=>{
    try {
        const lab = await labServices.createLab( req.body);
        res.status(201).json(lab);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

export const getAllLabs = async (req,res)=>{
    try {
        const labs =  await labServices.getAllLabs();
        res.status(200).json(labs);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

export const getLab = async (req,res)=>{
    try {
        const lab = await labServices.getLab(req.params.id);
        res.status(200).json(lab);
    } catch (error) {
        res.status(404).json({error:error.message});
    }
};

export const updateLab = async (req,res)=>{
    try {
        const updatedlab = await labServices.updateLab(req.params.id,req.body);
        res.status(200).json(updatedlab);
    } catch (error) {
        res.status(404).json({error:error.message});
    }
};

export const deleteLab = async (req,res)=>{
    try {
        const deleteLab = await labServices.deleteLab(req.params.id);
        res.status(200).json(deleteLab);

    } catch (error) {
        res.status(404).json({error:error.message});
    }
};