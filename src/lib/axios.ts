import axios from "axios";

const API = process.env.DEV
  ? process.env.VITE_API_LOCAL
  : process.env.VITE_API_PROD;

export const instance = axios.create({
  baseURL: API,
  withCredentials: true,
});

