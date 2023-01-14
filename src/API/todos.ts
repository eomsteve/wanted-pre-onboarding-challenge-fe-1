import { axiosRequest } from './axiosUtils';

/** 저장한 todo 리스트 불러오기 */
export const getTodos = () =>
  axiosRequest({
    method: 'GET',
    url: '/todos',
    functionName: 'getTodos',
  });

  /** 
   * 특정 todo 내용 가져오기 
   * @param {string} id - 사용자 email
  */
export const getTodoById = (id: string) =>
  axiosRequest({
    method: 'GET',
    url: `/todos/${id}`,
    functionName: 'getTodoById',
  });

  /**
   * Todo 생성 버튼
   * @param title 
   * @param content 
   */
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

  /**
   * update Todo list
   * @param id 
   * @param title 
   * @param content 
   */
export const updateTodo = (id: string | undefined, title: string, content: string) =>
  axiosRequest({
    method: 'PUT',
    url: `/todos/${id}`,
    functionName: 'updateTodo',
    body: {
      title,
      content,
    },
  });
/**
 * delete Todo
 * @param id 
 * @returns null
 */
export const deleteTodo = (id: string) =>
  axiosRequest({
    method: 'DELETE',
    url: `/todos/${id}`,
    functionName: 'deleteTodo',
  });
