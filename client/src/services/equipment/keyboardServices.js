import api from "../api";

export const createKeyboard = (keyboardData)=> api.post('/equipment/createKeyboard',keyboardData);
export const getAllKeyboards = () => api.get('/equipment/getAllKeyboards');
export const getKeyboard = (id) => api.get(`/equipment/getKeyboard/${id}`);
export const updateKeyboard = (id,keyboardData)=> api.put (`/equipment/updateKeyboard${id}`,keyboardData);
export const deleteKeyboard = (id)=>api.delete(`/equipment/deleteKeyboard/${id}`);