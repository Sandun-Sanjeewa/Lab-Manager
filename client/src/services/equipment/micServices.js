import api from "../api";

export const createMic = (micData)=> api.post('/equipment/createMic',micData);
export const getAllMics = () => api.get('/equipment/getAllMics');
export const getMic = (id) => api.get(`/equipment/getMic/${id}`);
export const updateMic = (id,micData)=> api.put (`/equipment/updateMic${id}`,micData);
export const deleteMic = (id)=>api.delete(`/equipment/deleteMic/${id}`);