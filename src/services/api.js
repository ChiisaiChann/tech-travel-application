import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6298e943bf77b602582395cc.mockapi.io/',
});

export default api;
