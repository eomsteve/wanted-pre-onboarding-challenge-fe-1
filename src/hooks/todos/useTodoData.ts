import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getTodos, createTodo, deleteTodo } from '../../API/todos';
import type { TodoData, CreateUpDateTodoList } from '../../API/types';
import { AxiosError } from 'axios';

export const useGetTodos = () => {
  return useQuery<{ data: TodoData[] }, AxiosError>(['todos'], getTodos);
};

export const useCreateTodo = ({ title, content }: CreateUpDateTodoList) => {
  const queryClient = useQueryClient();
  return useMutation(()=> createTodo(title, content), {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });
};

export const useDeleteTodo = (id : string)=>{
  const queryClient = useQueryClient();
  return useMutation(()=>deleteTodo(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    }
  })
}