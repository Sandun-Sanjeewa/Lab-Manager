import api from "../api";

export const createLap = (lapData)=> api.post('/equipment/createLap',lapData);
export const getAllLaps = () => api.get('/equipment/getAllLaps');
export const getLap = (id) => api.get(`/equipment/getLap/${id}`);
export const updateLap = (id,lapData)=> api.put (`/equipment/updateLap${id}`,lapData);
export const deleteLap = (id)=>api.delete(`/equipment/deleteLap/${id}`);