import api from "../api";

export const createMouse = (mouseData)=> api.post('/equipment/createMouse',mouseData);
export const getAllMouses = () => api.get('/equipment/getAllMouses');
export const getMouse = (id) => api.get(`/equipment/getMouse/${id}`);
export const updateMouse = (id,mouseData)=> api.put (`/equipment/updateMouse${id}`,mouseData);
export const deleteMouse = (id)=>api.delete(`/equipment/deleteMouse/${id}`);