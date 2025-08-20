import express from "express";
import { createEquipmentType, deleteEquipmentType, getAllEquipmentTypes, getEquipmentType, updateEquipmentType } from "../controllers/equipmentTypeController.js";

const equipmentTypeRouter = express.Router();

equipmentTypeRouter.post('/createEquipmenttype', createEquipmentType );
equipmentTypeRouter.get('/getAllEquipent', getAllEquipmentTypes);
equipmentTypeRouter.get('/getEquipment/:id', getEquipmentType);
equipmentTypeRouter.put('/updateEquipment/:id',updateEquipmentType);
equipmentTypeRouter.delete('/deleteEquipment/:id',deleteEquipmentType);
export default equipmentTypeRouter;
