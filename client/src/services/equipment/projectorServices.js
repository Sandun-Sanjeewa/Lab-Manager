import api from "../api";

export const createProjector = (projectorData)=> api.post('/equipment/createProjector',projectorData);
export const getAllProjectors = () => api.get('/equipment/getAllProjectors');
export const getProjector = (id) => api.get(`/equipment/getProjector/${id}`);
export const updateProjector = (id,projectorData)=> api.put (`/equipment/updateProjector${id}`,projectorData);
export const deleteProjector = (id)=>api.delete(`/equipment/deleteProjector/${id}`);