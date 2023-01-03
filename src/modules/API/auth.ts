import axios from 'axios';
import type { UserForm } from './types';

const API_URL = 'localhost:8080/users/';
export const loginApi = async(userInput : UserForm) => {
  try {
    const { data } = await axios.post(API_URL + 'login', {
      email : userInput.userEmail,
      password : userInput.userPassword
    });
    return data;
  } catch (error) {
    console.error("login API error : ",error);
  }
}

export const signUpApi = async(userInput : UserForm) => {
  try {
    const { data } = await axios.post(API_URL + 'create', {
      email : userInput.userEmail,
      password : userInput.userPassword
    });
    return data;
  } catch (error) {
    console.error("signUp API error : ",error);
  }
}