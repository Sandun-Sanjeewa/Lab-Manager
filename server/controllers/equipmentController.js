import * as equipmentServices from '../services/equipmentServices.js'

export const createEquipment = async (req,res)=>{
    try {
        const equipment = await equipmentServices.createEquipment(req.body);
        res.status(201).json(equipment);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

export const getAllEquipments = async (req,res)=>{
    try {
        const equipments = await equipmentServices.getAllEquipments();
        res.status(200).json(equipments);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

export const getEquipment = async (req,res)=>{
    try {
        const equipment = await equipmentServices.getEquipment(req.params.id);
        res.status(200).json(equipment);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
};

export const updateEquipment = async (req,res)=>{
    try {
        const updatedEquipment = await equipmentServices.updateEquipment(req.params.id, req.body);
        res.status(200).json(updatedEquipment);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
};

export const deleteEquipment = async (req,res) =>{
    try {
        const deletedEquipment = await equipmentServices.deleteEquipment(req.params.id);
        res.status(200).json(deletedEquipment);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
};