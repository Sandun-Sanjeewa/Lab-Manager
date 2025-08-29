import * as micServices from "../services/micServices.js"
export const createMic = async (req, res) => {
    try {
        const mic = await micServices.createMic(req.body);
        res.status(201).json(mic);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const getAllMics = async (req, res) => {
    try {
        const mics = await micServices.getAllMics();
        res.status(200).json(mics);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const getMic = async (req, res) => {
    try {
        const mic = await micServices.getMic(req.params.id);
        res.status(200).json(mic);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const updateMic = async (req, res) => {
    try {
        const updatedmic = await micServices.updateMic(req.params.id, req.body);
        res.status(200).json(updatedmic);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const deleteMic = async (req, res) => {
    try {
        const deletedmic = await micServices.deleteMic(req.params.id);
        res.status(200).json(deletedmic);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};