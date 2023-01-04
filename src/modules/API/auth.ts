import axios, { AxiosError } from 'axios';
import type { UserForm } from './types';

const API_URL = 'http://localhost:8080/users/';
export const loginApi = async (userInput: UserForm) => {
  try {
    const { data } = await axios.post(API_URL + 'login', {
      email: userInput.userEmail,
      password: userInput.userPassword,
    });
    console.log(data);
    return data;
  } catch (error) {
    const err = error as AxiosError;
    const message = err.response?.data;
    console.error('login API error : ', error);
    return message;
  }
};

export const signUpApi = async (userInput: UserForm) => {
  try {
    const { data } = await axios.post(API_URL + 'create', {
      email: userInput.userEmail,
      password: userInput.userPassword,
    });
    console.log(data);
    return data;
  } catch (error) {
    const err = error as AxiosError;
    const message = err.response?.data;
    console.error('signUp API error : ', error);
    return message;
  }
};
