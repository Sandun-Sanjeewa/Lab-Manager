import * as keyboardServices from "../services/keyboardServices.js"
export const createKeyboard = async (req, res) => {
    try {
        const keyboard = await keyboardServices.createKeyboard(req.body);
        res.status(201).json(keyboard);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const getAllKeyboards = async (req, res) => {
    try {
        const keyboards = await keyboardServices.getAllKeyboards();
        res.status(200).json(keyboards);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const getKeyboard = async (req, res) => {
    try {
        const keyboard = await keyboardServices.getKeyboard(req.params.id);
        res.status(200).json(keyboard);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const updateKeyboard = async (req, res) => {
    try {
        const updatedkeyboard = await keyboardServices.updateKeyboard(req.params.id, req.body);
        res.status(200).json(updatedkeyboard);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const deleteKeyboard = async (req, res) => {
    try {
        const deletedkeyboard = await keyboardServices.deleteKeyboard(req.params.id);
        res.status(200).json(deletedkeyboard);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};