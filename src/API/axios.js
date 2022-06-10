import axios from "axios";

export const url = 'http://localhost:3000/v1';

export const Axios = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});