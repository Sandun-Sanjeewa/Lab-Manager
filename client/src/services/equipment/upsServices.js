import api from "../api";

export const createUps = (upsData)=> api.post('/equipment/createUps',upsData);
export const getAllUpss = () => api.get('/equipment/getAllUpss');
export const getUps = (id) => api.get(`/equipment/getUps/${id}`);
export const updateUps = (id,upsData)=> api.put (`/equipment/updateUps${id}`,upsData);
export const deleteUps = (id)=>api.delete(`/equipment/deleteUps/${id}`);