import * as monitorServices from '../services/monitorServices.js';

export const createMonitor = async (req, res) => {
    try {
        const monitor = await monitorServices.createMonitor(req.body);
        res.status(201).json(monitor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getAllMonitors = async (req, res) => {
    try {
        const monitors = await monitorServices.getAllMonitors();
        res.status(200).json(monitors);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getMonitor = async (req, res) => {
    try {
        const monitor = await monitorServices.getMonitor(req.params.id);
        res.status(200).json(monitor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updatedMonitor = async (req, res) => {
    try {
        const updatedMonitor = await monitorServices.updateMonitor(req.params.id, req.body);
        res.status(200).json(updatedMonitor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteMonitor = async(req,res)=>{
    try {
        const deleteMonitor = await monitorServices.deleteMonitor(req.params.id);
        res.status(200).json(deleteMonitor);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};