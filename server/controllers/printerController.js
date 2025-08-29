import * as printerServices from "../services/printerServices.js"
export const createPrinter = async (req, res) => {
    try {
        const printer = await printerServices.createPrinter(req.body);
        res.status(201).json(printer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const getAllPrinters = async (req, res) => {
    try {
        const printers = await printerServices.getAllPrinters();
        res.status(200).json(printers);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const getPrinter = async (req, res) => {
    try {
        const printer = await printerServices.getPrinter(req.params.id);
        res.status(200).json(printer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const updatePrinter = async (req, res) => {
    try {
        const updatedPrinter = await printerServices.updatePrinter(req.params.id, req.body);
        res.status(200).json(updatedPrinter);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const deletePrinter = async (req, res) => {
    try {
        const deletedPrinter = await printerServices.deletePrinter(req.params.id);
        res.status(200).json(deletedPrinter);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};