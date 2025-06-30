import api from './api.js';

export const signupUser = (userData) => api.post('/user/signup',userData);
export const loginUser = (userData) => api.post('/user/login', userData);
export const getAllUsers = () => api.get('/user/getallusers');
export const updateUserrole = (id,role) => api.patch(`/user/updateuserrole/${id}/role`,{role});
export const deleteUser = (id) => api.delete(`/user/deleteuser/${id}`);
