// src/api/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const getImages = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/images`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener las imágenes:', error.response ? error.response.data : error.message);
    throw error;
  }
};
