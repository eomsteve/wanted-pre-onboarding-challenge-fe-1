export interface UserForm {
  userEmail: string;
  userPassword: string;
}

export interface AuthApiResponse {
  message?: string;
  token?: string;
  details? : string;
}


export interface AxiosRequest {
  method: string;
  url: string;
  functionName: string;
}