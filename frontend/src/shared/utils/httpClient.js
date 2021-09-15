import axios from 'axios';

const AXIOS_CONFIG = {
    // baseURL: process.env.API_URL || 'http://localhost:3000',
    baseURL: 'http://localhost:8080/task',
    headers: () => ({
        'Content-Type': 'application/json',
    }),
};

export default async function httpClient(method, url, variables) {
    return axios({
            baseURL: AXIOS_CONFIG.baseURL,
            timeout: 1000,
            headers: { 'Access-Control-Allow-Origin': true },
            method,
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
}