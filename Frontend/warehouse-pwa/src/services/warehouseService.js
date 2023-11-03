import axios from 'axios';
import http from '../http-common';

const API_BASE_URL = 'http://kberisa-001-site1.ftempurl.com'; // API endpoint

export const getWarehouseItem = () => {
  return axios.get(`${API_BASE_URL}/items`);
};

export const addWarehouseItem = (item) => {
  return axios.post(`${API_BASE_URL}/items`, item);
};

export const updateWarehouseItem = (id, item) => {
  return axios.put(`${API_BASE_URL}/items/${id}`, item);
};

export const deleteWarehouseItem = (id) => {
  return axios.delete(`${API_BASE_URL}/items/${id}`);
};