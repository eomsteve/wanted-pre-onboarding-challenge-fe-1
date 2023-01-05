import React, { FC, useState } from 'react';
import { createTodo } from '../../modules/API/todos';
export const CreateTodoButton: FC = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo(title, content);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(()=> e.target.value)
          }
        />
        <input
          type="text"
          placeholder="content"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setContent(()=> e.target.value)
          }
        />
        <button type="submit">{`ToDo 생성`}</button>
      </form>
    </>
  );
};
