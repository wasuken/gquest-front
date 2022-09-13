import axios from "axios";

export default axios.create({ baseURL: import.meta.env.VITE_API_URL });

export const authAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
