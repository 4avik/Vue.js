import axios from 'axios';

export const fakestoreAPI = axios.create({
    baseURL: 'https://fakestoreapi.com'
});