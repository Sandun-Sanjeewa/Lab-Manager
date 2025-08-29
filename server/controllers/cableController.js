import * as cableServices from "../services/cableServices.js"
export const createCable = async (req, res) => {
    try {
        const mouse = await cableServices.createCable(req.body);
        res.status(201).json(mouse);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const getAllCables = async (req, res) => {
    try {
        const mouses = await cableServices.getAllCables();
        res.status(200).json(mouses);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const getCable = async (req, res) => {
    try {
        const mouse = await cableServices.getCable(req.params.id);
        res.status(200).json(mouse);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const updateCable = async (req, res) => {
    try {
        const updatedmouse = await cableServices.updateCable(req.params.id, req.body);
        res.status(200).json(updatedmouse);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const deleteCable = async (req, res) => {
    try {
        const deletedmouse = await cableServices.deleteCable(req.params.id);
        res.status(200).json(deletedmouse);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};