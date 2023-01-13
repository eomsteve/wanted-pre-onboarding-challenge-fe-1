import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getTodos, createTodo, deleteTodo } from '../../API/todos';
import type { TodoData, CreateUpDateTodoList } from '../../API/types';
import { AxiosError } from 'axios';

export const useGetTodos = () => {
  return useQuery<{ data: TodoData[] }, AxiosError>(['todos'], getTodos);
};

const createTodoAction = ({ title, content }: CreateUpDateTodoList) => {
  return createTodo(title, content);
};

export const useCreateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(createTodoAction, {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });
};

const deleteTodoAction = (id : string) =>{
  return deleteTodo(id);
}
export const useDeleteTodo = ()=>{
  const queryClient = useQueryClient();
  return useMutation(deleteTodoAction, {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    }
  })
}