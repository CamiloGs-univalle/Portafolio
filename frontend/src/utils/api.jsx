import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Cambia esta URL si el backend está en producción
  timeout: 5000, // Tiempo máximo de espera para cada solicitud
});

export default api;
