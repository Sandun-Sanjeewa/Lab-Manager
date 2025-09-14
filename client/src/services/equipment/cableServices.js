import api from "../api";

export const createCable = (cableData)=> api.post('/equipment/createCable',cableData);
export const getAllCables = () => api.get('/equipment/getAllCables');
export const getCable = (id) => api.get(`/equipment/getCable/${id}`);
export const updateCable = (id,cableData)=> api.put (`/equipment/updateCable/${id}`,cableData);
export const deleteCable = (id)=>api.delete(`/equipment/deleteCable/${id}`);
