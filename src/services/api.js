import axios from 'axios';
import { getToken } from './auth';

const API = axios.create({
    baseURL: "http://127.0.0.1:8080/"
})

API.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
        config.headers = { 'x-auth-token': token };
    }
    return config;
});

export default API;