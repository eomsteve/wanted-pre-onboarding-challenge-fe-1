import React, { FC, useState } from 'react';
import type { CreateUpDateTodoList, TodoData } from '../../API/types';
import { createTodo, getTodos } from '../../API/todos';
import {
  useQuery,
  useMutation,
  QueryClient,
  InvalidateOptions,
} from 'react-query';
export const CreateTodoButton: FC = () => {
  const queryClient = new QueryClient();
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const { mutate } = useMutation(() => createTodo(title, content), {
    onSuccess: () => {
      console.log('Success');
      queryClient.invalidateQueries(['todos']);
    },
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(() => e.target.value)
          }
        />
        <input
          type="text"
          placeholder="content"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setContent(() => e.target.value)
          }
        />
        <button type="submit">{`ToDo 생성`}</button>
      </form>
    </>
  );
};
