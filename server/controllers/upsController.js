import * as upsServices from "../services/upsServices.js"

export const createUps = async(req,res)=>{
    try {
        const ups = await upsServices.createUps(req.body);
        res.status(201).json(ups);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

export const getAllUps = async(req,res)=>{
    try {
        const upss = await upsServices.getAllUps();
        res.status(200).json(upss);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

export const getUps = async(req,res)=>{
    try {
        const ups = await upsServices.getUps(req.params.id);
        res.status(200).json(ups);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

export const updatedUps = async(req,res)=>{
    try {
        const updatedUps = await upsServices.updateUps(req.params.id, req.body);
        res.status(200).json(updatedUps);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

export const deleteUps = async(req,res)=>{
    try {
        const deletedUps = await upsServices.deleteUps(req.params.id);
        res.status(200).json(deletedUps);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};