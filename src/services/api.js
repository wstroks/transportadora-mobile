import axios from 'axios';

const api = axios.create({
    baseURL: "https://api-transportadora.herokuapp.com/",
});

export default api;