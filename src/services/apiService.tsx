import axios from "axios";

const API_KEY = import.meta.env.VITE_REACT_API_KEY;
const API_URL = import.meta.env.VITE_REACT_API_URL;

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": API_KEY,
  },
});

export const isAxiosError = axios.isAxiosError;

export default apiClient;
