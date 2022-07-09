import axios from "axios";

export const url = 'http://localhost:8080/v1';


/*
get body = {
    "query": "110.137.101.135"
}
*/
export const ip_api = `http://ip-api.com/json`


export const Axios = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});