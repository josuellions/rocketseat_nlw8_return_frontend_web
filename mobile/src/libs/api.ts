import axios from 'axios';

export const api = axios.create({
  //baseURL: 'http://21.21.21.14:3333'
  baseURL: 'https://nlw8-return-backend-jl-production.up.railway.app'
})