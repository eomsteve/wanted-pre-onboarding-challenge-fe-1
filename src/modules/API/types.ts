export interface UserForm {
  email: string;
  password: string;
}

export interface AuthApiResponse {
  message?: string;
  token?: string;
  details?: string;
}

export interface AxiosRequest {
  method: string;
  url: string;
  functionName: string;
  body?: UserForm | CreateUpDateTodoList;
}

export interface CreateUpDateTodoList {
  title: string;
  content: string;
}

export interface TodoData extends CreateUpDateTodoList {
  id: string;
  createdAt?: string;
  updatedAt?: string;
}
