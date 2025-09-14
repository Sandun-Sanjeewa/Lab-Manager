import express from "express";
import { createMachine, deleteMachine, getAllMachines, getMachine, updateMachine } from "../controllers/machineController.js";
import { createMonitor, deleteMonitor, getAllMonitors, getMonitor, updatedMonitor } from "../controllers/monitorController.js";
import { createUps, deleteUps, getAllUps, getUps, updatedUps } from "../controllers/upsController.js";
import { createProjector, deleteProjector, getAllProjectors, getProjector, updateProjector } from "../controllers/projectorController.js";
import { createPrinter, deletePrinter, getAllPrinters, getPrinter, updatePrinter } from "../controllers/printerController.js";
import { createScaner, deleteScaner, getAllScaners, getScaner, updatedScaner } from "../controllers/scanerController.js";
import { createKeyboard, deleteKeyboard, getAllKeyboards, getKeyboard, updateKeyboard } from "../controllers/keyboardController.js";
import { createMouse, deleteMouse, getAllMouses, getMouse, updateMouse } from "../controllers/mouseController.js";
import { createMic, deleteMic, getAllMics, getMic, updateMic } from "../controllers/micController.js";
import { createCable, deleteCable, getAllCables, getCable, updateCable } from "../controllers/cableController.js";
import { createLap, deleteLap, getAllLaps, getLap, updateLap } from "../controllers/lapController.js";


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

equipmentRouter.post('/createProjector', createProjector);
equipmentRouter.get('/getAllProjectors', getAllProjectors);
equipmentRouter.get('/getProjector/:id', getProjector);
equipmentRouter.put('/updateProjector/:id',updateProjector);
equipmentRouter.delete('/deleteProjector/:id', deleteProjector);

equipmentRouter.post('/createPrinter', createPrinter);
equipmentRouter.get('/getAllPrinters', getAllPrinters);
equipmentRouter.get('/getPrinter/:id', getPrinter);
equipmentRouter.put('/updatePrinter/:id',updatePrinter);
equipmentRouter.delete('/deletePrinter/:id', deletePrinter);

equipmentRouter.post('/createScaner', createScaner);
equipmentRouter.get('/getAllScaners', getAllScaners);
equipmentRouter.get('/getScaner/:id', getScaner);
equipmentRouter.put('/updateScaner/:id',updatedScaner);
equipmentRouter.delete('/deleteScaner/:id', deleteScaner);

equipmentRouter.post('/createKeyboard', createKeyboard);
equipmentRouter.get('/getAllKeyboards', getAllKeyboards);
equipmentRouter.get('/getKeyboard/:id', getKeyboard);
equipmentRouter.put('/updateKeyboard/:id',updateKeyboard);
equipmentRouter.delete('/deleteKeyboard/:id', deleteKeyboard);


equipmentRouter.post('/createMouse', createMouse);
equipmentRouter.get('/getAllMouses', getAllMouses);
equipmentRouter.get('/getMouse/:id', getMouse);
equipmentRouter.put('/updateMouse/:id',updateMouse);
equipmentRouter.delete('/deleteMouse/:id', deleteMouse);

equipmentRouter.post('/createMic', createMic);
equipmentRouter.get('/getAllMics', getAllMics);
equipmentRouter.get('/getMic/:id', getMic);
equipmentRouter.put('/updateMic/:id',updateMic);
equipmentRouter.delete('/deleteMic/:id', deleteMic);

equipmentRouter.post('/createCable', createCable);
equipmentRouter.get('/getAllCables', getAllCables);
equipmentRouter.get('/getCable/:id', getCable);
equipmentRouter.put('/updateCable/:id',updateCable);
equipmentRouter.delete('/deleteCable/:id', deleteCable);

equipmentRouter.post('/createLap', createLap);
equipmentRouter.get('/getAllLaps', getAllLaps);
equipmentRouter.get('/getLap/:id', getLap);
equipmentRouter.put('/updateLap/:id',updateLap);
equipmentRouter.delete('/deleteLap/:id', deleteLap);


export default equipmentRouter;

