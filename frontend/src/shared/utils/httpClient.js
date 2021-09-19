import axios from 'axios';

const AXIOS_CONFIG = {
  // baseURL: process.env.API_URL || 'http://localhost:3000',
  baseURL: 'http://localhost:8080/api',
  headers: () => ({
    'Content-Type': 'application/json',
  }),
};

export default async function httpClient(method, url, data) {
  return axios({
    baseURL: AXIOS_CONFIG.baseURL + url,
    timeout: 1000,
    headers: { 'Access-Control-Allow-Origin': true },
    method,
    data,
  })
    .then((response) => {
      // console.log(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log('http client error:', err);
      return err;
    });

  // console.log('res in axios ist', res);
}
