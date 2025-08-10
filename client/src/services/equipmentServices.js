import api from "./api";
export const createEquipmentType = (equipmentData)=> api.post('/equipment/createEquipmenttype',equipmentData);
export const getAllEquipments = () => api.get('/equipment/getAllEquipent');
export const getEquipmentType = (id) => api.get(`/equipment/getEquipment/${id}`);
export const updateEquipmentType = (id,equipmentData) => api.put(`/equipment/updateEquipment/${id}`,equipmentData)
export const deleteEquipmentType = (id) => api.delete(`/equipment/deleteEquipment/${id}`);