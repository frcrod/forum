import axios from 'axios';

const API_URL = process.env.API_URL || 'http://localhost:8080/';

const AxiosInstance = axios.create({
  baseURL: API_URL,
});

export default AxiosInstance;
