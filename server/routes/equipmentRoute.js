import express from "express";
import { createMachine, deleteMachine, getAllMachines, getMachine, updateMachine } from "../controllers/equipmentController.js";
import { createMonitor, deleteMonitor, getAllMonitors, getMonitor, updatedMonitor } from "../controllers/monitorController.js";
import { createUps, deleteUps, getAllUps, getUps, updatedUps } from "../controllers/upsController.js";


const equipmentRouter = express.Router();

equipmentRouter.post('/createMachine', createMachine);
equipmentRouter.get('/getAllMachines', getAllMachines);
equipmentRouter.get('/getMachine/:id', getMachine);
equipmentRouter.put('/updateMachine/:id', updateMachine);
equipmentRouter.delete('/deleteMachine/:id', deleteMachine);


equipmentRouter.post('/createMonitor', createMonitor);
equipmentRouter.get('/getAllMonitors', getAllMonitors);
equipmentRouter.get('/getMonitor/:id', getMonitor);
equipmentRouter.put('/updateMonitor/:id', updatedMonitor);
equipmentRouter.delete('/deleteMonitor/:id', deleteMonitor);

equipmentRouter.post('/createUps', createUps);
equipmentRouter.get('/getAllUpss', getAllUps);
equipmentRouter.get('/getUps/:id', getUps);
equipmentRouter.put('/updateUps/:id',updatedUps);
equipmentRouter.delete('/deleteUps/:id', deleteUps);


export default equipmentRouter;
