import axios, { AxiosError } from 'axios';
import type { AxiosRequest } from './types';

const API_URL = 'http://localhost:8080';

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

export const authHeader = (token: string | null) => {
  if (token != null) {
    return (axios.defaults.headers.common['Authorization'] = `${token}`);
  } else {
    return delete axios.defaults.headers.common['Authorization'];
  }
};

export const isLoggedIn = (): boolean => {
  authHeader(localStorage.getItem('loginToken'));
  return !!localStorage.getItem('loginToken');
};
