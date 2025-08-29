import * as lapServices from '../services/lapServices.js'

export const createLap = async (req, res) => {
    try {
        const lap = await lapServices.createLap(req.body);
        res.status(201).json(lap);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getAllLaps =async(req,res) =>{
    try {
        const laps = await lapServices.getAllLaps();
        res.status(200).json(laps);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

export const getLap = async(req,res)=>{
    try {
        const lap = await lapServices.getLap(req.params.id);
        res.status(200).json(lap);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

export const updateLap = async(req,res)=>{
    try {
        const updatedlap = await lapServices.updateLap(req.params.id,req.body);
        res.status(200).json(updatedlap);
    } catch (error) {
        res.status(400).json({error:error.message});   
    }
};

export const deleteLap = async(req,res)=>{
    try {
        const deletedlap = await lapServices.deleteLap(req.params.id);
        res.status(200).json(deletedlap);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};