import * as equipmentTypeServices from '../services/equipmentTypeServices.js'

export const createEquipmentType = async (req,res)=>{
    try {
        const equipmentType = await equipmentTypeServices.createEquipmentType(req.body);
        res.status(201).json(equipmentType);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

export const getAllEquipmentTypes = async (req,res)=>{
    try {
        const equipmentTypes = await equipmentTypeServices.getAllEquipmentTypes();
        res.status(200).json(equipmentTypes);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

export const getEquipmentType = async (req,res)=>{
    try {
        const equipmentType = await equipmentTypeServices.getEquipmentType(req.params.id);
        res.status(200).json(equipmentType);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
};

export const updateEquipmentType = async (req,res)=>{
    try {
        const updatedEquipmentType = await equipmentTypeServices.updateEquipmentType(req.params.id, req.body);
        res.status(200).json(updatedEquipmentType);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
};

export const deleteEquipmentType = async (req,res) =>{
    try {
        const deletedEquipmentType = await equipmentTypeServices.deleteEquipmentType(req.params.id);
        res.status(200).json(deletedEquipmentType);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
};

