import api from "./api";
export const createEquipmentType = (equipmentData)=> api.post('/equipment-type/createEquipmenttype',equipmentData);
export const getAllEquipments = () => api.get('/equipment-type/getAllEquipent');
export const getEquipmentType = (id) => api.get(`/equipment-type/getEquipment/${id}`);
export const updateEquipmentType = (id,equipmentData) => api.put(`/equipment-type/updateEquipment/${id}`,equipmentData)
export const deleteEquipmentType = (id) => api.delete(`/equipment-type/deleteEquipment/${id}`);
