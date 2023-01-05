import { axiosRequest } from './axiosUtils';

export const getTodos = () =>
  axiosRequest({
    method: 'GET',
    url: '/todos',
    functionName: 'getTodos',
  });

export const getTodoById = (id: string) =>
  axiosRequest({
    method: 'GET',
    url: `/todos/${id}`,
    functionName: 'getTodoById',
  });

export const createTodo = (title: string, content: string) =>
  axiosRequest({
    method: 'POST',
    url: `/todos`,
    functionName: 'createTodo',
    body: {
      title,
      content,
    },
  });

export const updateTodo = (id: string, title: string, content: string) =>
  axiosRequest({
    method: 'PUT',
    url: `todos/${id}`,
    functionName: 'updateTodo',
    body: {
      title,
      content,
    },
  });

export const deleteTodo = (id: string) =>
  axiosRequest({
    method: 'DELETE',
    url: `todos/${id}`,
    functionName: 'deleteTodo',
  });
