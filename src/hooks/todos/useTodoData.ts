import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getTodos, createTodo, deleteTodo, updateTodo } from '../../API/todos';
import type { TodoData, CreateUpDateTodoList } from '../../API/types';
import { AxiosError } from 'axios';

//** fetch todos */
export const useGetTodos = () => {
  return useQuery<TodoData[], AxiosError>(['todos'], getTodos);
};

//** Create new Todo  */
export const useCreateTodo = ({ title, content }: CreateUpDateTodoList) => {
  const queryClient = useQueryClient();
  return useMutation(() => createTodo(title, content), {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });
};

//** Delete Todo */
export const useDeleteTodo = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation(() => deleteTodo(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });
};
//** Update Todo */

export const useUpdateTodo = ({ id, title, content }: CreateUpDateTodoList) => {
  const queryClient = useQueryClient();
  return useMutation(() => updateTodo(id, title, content), {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });
};
