import * as scanerServices from "../services/scanerServices.js"

export const createScaner = async (req, res) => {
    try {
        const scaner = await scanerServices.createScaner(req.body);
        res.status(201).json(scaner);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getAllScaners = async (req, res) => {
    try {
        const scaners = await scanerServices.getAllScaners();
        res.status(200).json(scaners);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getScaner = async (req, res) => {
    try {
        const scaner = await scanerServices.getScaner(req.params.id);
        res.status(200).json(scaner);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updatedScaner = async (req, res) => {
    try {
        const updatedScaner = await scanerServices.updateScaner(req.params.id, req.body);
        res.status(200).json(updatedScaner);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteScaner = async (req, res) => {
    try {
        const deleteScaner = await scanerServices.deleteScaner(req.params.id);
        res.status(200).json(deleteScaner);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};