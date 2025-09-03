import api from "../api";

export const createMonitor = (monitorData)=> api.post('/equipment/createMonitor',monitorData);
export const getAllMonitors = () => api.get('/equipment/getAllMonitors');
export const getMonitor = (id) => api.get(`/equipment/getMonitor/${id}`);
export const updateMonitor = (id,monitorData)=> api.put (`/equipment/updateMonitor${id}`,monitorData);
export const deleteMonitor = (id)=>api.delete(`/equipment/deleteMonitor/${id}`);