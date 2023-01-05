import axios, { AxiosError } from 'axios';
import type { UserForm } from './types';

const API_URL = 'http://localhost:8080/';


export const getTodos = async() =>{
  try {
    const { data } = await axios.get(API_URL + 'todos');
    return data
  } catch (error) {
    const err = error as AxiosError;
    const message = err.response?.data;
    console.error('GET todos API error : ', error);
    return message;
  }
}