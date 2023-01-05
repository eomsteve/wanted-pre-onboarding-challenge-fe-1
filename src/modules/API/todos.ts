import axios, { AxiosError } from 'axios';
import type { AxiosRequest } from './types';
const API_URL = 'http://localhost:8080';

const axiosRequest = async ({ method, url, functionName }: AxiosRequest) => {
  try {
    const { data } = await axios({
      method,
      url: API_URL + url,
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

export const getTodos = () =>
  axiosRequest({
    method: 'GET',
    url: '/todos',
    functionName: 'getTodos',
  });

export const getTodoById = (id: string | number) =>
  axiosRequest({
    method: 'GET',
    url: `/todos/${id}`,
    functionName: 'getTodos',
  });
