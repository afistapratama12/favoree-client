import axios from "axios";

export const base_url = `http://localhost:8080/v1`

/*
get body = {
    "query": "110.137.101.135"
}
*/
export const ip_api = `http://ip-api.com/json`

export const Axios = axios.create({
    baseURL: base_url,
});