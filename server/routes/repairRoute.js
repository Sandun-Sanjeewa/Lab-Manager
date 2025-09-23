import express from "express";
import { createRepair, deleteRepair, getAllRepairs, getRepair, updateRepair } from "../controllers/repairController.js";



const repairRoute = express.Router();

repairRoute.post('/createRepair',createRepair);
repairRoute.get('/getAllRepairs',getAllRepairs);
repairRoute.get('/getRepair/:id',getRepair);
repairRoute.put('/updateRepair/:id', updateRepair);
repairRoute.delete('/deleteRepair/:id',deleteRepair);
export default repairRoute;