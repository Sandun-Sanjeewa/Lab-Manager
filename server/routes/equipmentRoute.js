import express from "express";
import { createMachine, deleteMachine, getAllMachines, getMachine, updateMachine } from "../controllers/equipmentController.js";

const equipmentRouter = express.Router();

equipmentRouter.post('/createMachine', createMachine);
equipmentRouter.get('/getAllMachines', getAllMachines);
equipmentRouter.get('/getMachine/:id', getMachine);
equipmentRouter.put('/updateMachine/:id', updateMachine);
equipmentRouter.delete('/deleteMachine/:id', deleteMachine);

export default equipmentRouter;
