import express from "express";
import { createEquipment, deleteEquipment, getAllEquipments, getEquipment, updateEquipment } from "../controllers/equipmentController.js";

const equipmentTypeRouter = express.Router();

equipmentTypeRouter.post('/createEquipment', createEquipment );
equipmentTypeRouter.get('/getAllEquipent', getAllEquipments);
equipmentTypeRouter.get('/getEquipment/:id', getEquipment);
equipmentTypeRouter.put('/updateEquipment/:id',updateEquipment);
equipmentTypeRouter.delete('/deleteEquipment/:id',deleteEquipment);
export default equipmentTypeRouter;