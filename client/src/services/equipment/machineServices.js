import api from "../api";

export const createMachine = (machineData)=> api.post('/equipment/createMachine',machineData);
export const getAllMachines = () => api.get('/equipment/getAllMachines');
export const getMachine = (id) => api.get(`/equipment/getMachine/${id}`);
export const updateMachine = (id,machineData)=> api.put (`/equipment/updateMachine${id}`,machineData);
export const deleteMachine = (id)=>api.delete(`/equipment/deleteMachine/${id}`);