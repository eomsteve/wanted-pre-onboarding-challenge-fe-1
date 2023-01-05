import type { UserForm } from './types';
import { axiosRequest } from './axiosUtils';

export const loginApi = async (userInput: UserForm) => axiosRequest({
  method: 'POST',
  url: '/users/login',
  functionName : "loginApi",
  body:{
    email: userInput.email,
    password: userInput.password
  }
})
export const signUpApi = async (userInput: UserForm) => axiosRequest({
  method: 'POST',
  url: '/users/create',
  functionName : "SignUp Api",
  body:{
    email: userInput.email,
    password: userInput.password
  }
})