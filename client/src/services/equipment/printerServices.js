import api from "../api";

export const createPrinter = (printerData)=> api.post('/equipment/createPrinter',printerData);
export const getAllPrinters = () => api.get('/equipment/getAllPrinters');
export const getPrinter = (id) => api.get(`/equipment/getPrinter/${id}`);
export const updatePrinter = (id,printerData)=> api.put (`/equipment/updatePrinter${id}`,printerData);
export const deletePrinter = (id)=>api.delete(`/equipment/deletePrinter/${id}`);