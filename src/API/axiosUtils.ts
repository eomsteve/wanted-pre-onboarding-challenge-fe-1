import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import type { AxiosRequest } from './types';

export const API_URL = 'http://localhost:8080';

export const axiosRequest = async ({
  method,
  url,
  functionName,
  body,
}: AxiosRequest) => {
  try {
    const { data } = await axios({
      method,
      url: API_URL + url,
      data: body,
    });
    console.log('result data : ', data);
    return data;
  } catch (error) {
    const err = error as AxiosError;
    const message = err.response?.data;
    console.error(`[${method}] ${functionName} API error :`, error);
    return message;
  }
};

/**
 * * request 요청시, token이 있다면 header에 authorization token 추가
 */

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers = {};
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * * response 할때 토큰값이 response안에 있다면 token을 localhost에 저장
 */

axios.interceptors.response.use(
  (config: AxiosResponse) => {
    const responseData = config.data;
    console.log(responseData);
    return config;
  },
  (error) => Promise.reject(error)
);

export const isLoggedIn = (): boolean => {
  return !!localStorage.getItem('loginToken');
};
