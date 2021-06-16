import axios, { AxiosResponse } from 'axios';

//리코일에서는 api를 관리 하면 복잡해짐..
const apiConfig = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 1000,
});

const responseBody = (response: AxiosResponse) => response.data;

export const requests = {
  get: (url: string) => apiConfig.get(url),
  post: (url: string, body: {}) => apiConfig.post(url, body),
  // put: (url: string, body: {}) => apiConfig.put(url, body).then(responseBody),//전체 수정
  patch: (url: string, body: {}) => apiConfig.patch(url, body), //바뀐 내용만 수정
  delete: (url: string) => apiConfig.delete(url),
};
