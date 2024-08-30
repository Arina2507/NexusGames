import axios from 'axios';

const api = axios.create({
    baseURL: "https://rawg.io/api/"
});

export default api;