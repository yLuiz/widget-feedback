import axios from 'axios';

export const api = axios.create({
    baseURL: "http://147.1.5.47:3333",
  })