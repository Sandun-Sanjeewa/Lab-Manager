import express from "express";
import { createLab, deleteLab, getAllLabs, getLab, updateLab } from "../controllers/labController.js";

const labrouter = express.Router();

labrouter.post('/createlab',createLab);
labrouter.get('/getAllLabs',getAllLabs);
labrouter.get('/getLab/:id',getLab);
labrouter.put('/updateLab/:id',updateLab);
labrouter.delete('/deleteLab/:id',deleteLab);

export default labrouter;

