import * as projecterServices from '../services/projectorServices.js'

export const createProjector = async (req, res) => {
    try {
        const projector = await projecterServices.createProjector(req.body);
        res.status(201).json(projector);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getAllProjectors =async(req,res) =>{
    try {
        const projects = await projecterServices.getAllProjectors();
        res.status(200).json(projects);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

export const getProjector = async(req,res)=>{
    try {
        const projector = await projecterServices.getProjector(req.params.id);
        res.status(200).json(projector);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

export const updateProjector = async(req,res)=>{
    try {
        const updatedProjector = await projecterServices.updateProjector(req.params.id,req.body);
        res.status(200).json(updatedProjector);
    } catch (error) {
        res.status(400).json({error:error.message});   
    }
};

export const deleteProjector = async(req,res)=>{
    try {
        const deletedProjector = await projecterServices.deleteProjector(req.params.id);
        res.status(200).json(deletedProjector);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};