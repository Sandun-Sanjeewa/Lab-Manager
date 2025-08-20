import api from "../api";

export const createMachine = (machineData)=> api.post('/equipment/createMachine',machineData);
export const getAllMachines = () => api.get('/equipment/getAllMachines');