import api from './api.js';

export const createLab = (labData) => api.post('/lab/createlab',labData);
export const getAllLabs = () => api.get('/lab/getAllLabs');
export const getLab = (id) => api.get(`/lab/getLab/${id}`);
export const updateLab = (id, updateData) => api.put(`/lab/updateLab/${id}`, updateData);
export const deleteLab = (id) => api.delete(`/lab/deleteLab/${id}`);