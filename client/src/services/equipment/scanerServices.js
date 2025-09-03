import api from "../api";

export const createScaner = (scanerData)=> api.post('/equipment/createScaner',scanerData);
export const getAllScaners = () => api.get('/equipment/getAllScaners');
export const getScaner = (id) => api.get(`/equipment/getScaner/${id}`);
export const updateScaner = (id,scanerData)=> api.put (`/equipment/updateScaner${id}`,scanerData);
export const deleteScaner = (id)=>api.delete(`/equipment/deleteScaner/${id}`);