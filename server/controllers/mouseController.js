import * as mouseServices from "../services/mouseServices.js"
export const createMouse = async (req, res) => {
    try {
        const mouse = await mouseServices.createMouse(req.body);
        res.status(201).json(mouse);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const getAllMouses = async (req, res) => {
    try {
        const mouses = await mouseServices.getAllMouses();
        res.status(200).json(mouses);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const getMouse = async (req, res) => {
    try {
        const mouse = await mouseServices.getMouse(req.params.id);
        res.status(200).json(mouse);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const updateMouse = async (req, res) => {
    try {
        const updatedmouse = await mouseServices.updateMouse(req.params.id, req.body);
        res.status(200).json(updatedmouse);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const deleteMouse = async (req, res) => {
    try {
        const deletedmouse = await mouseServices.deleteMouse(req.params.id);
        res.status(200).json(deletedmouse);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};