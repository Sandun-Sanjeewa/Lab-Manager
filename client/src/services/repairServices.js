import api from "./api";
export const createRepair = (data)=>api.post('/repair/createRepair',data);
export const getAllRepairs = () => api.get('/repair/getAllRepairs');
export const getRepair = (id) => api.get(`/repair/getRepair/${id}`);
export const updateRepair = (id,updateData) =>api.put(`/repair/updateRepair/${id}`,updateData)
export const deleteRepair = (id)=>api.delete(`/repair/deleteRepair/${id}`);