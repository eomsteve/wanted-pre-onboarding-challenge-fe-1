import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import type { TodoData } from '../../API/types';
import { useDeleteTodo } from '../../hooks/todos/useTodoData';
import e from 'express';

export const Todo: FC<TodoData> = ({ title, content, id }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { mutate : deleteTodo } = useDeleteTodo(id);
  const cancelEdit = () => {
    setIsEdit(false);
  };
  const handleUpdateSubmit = (e : React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();

  }
  return (
    <>
      {isEdit ? <>
      <form onSubmit={handleUpdateSubmit}>
        <input type="text" value={title}/>
        <input type="text" value={content}/>
      </form>
      </> : <Link to={`/${id}`}>
        <header>title : {title}</header>
        <p>content : {content}</p>
      </Link> }
      <button onClick={() => setIsEdit(true)}>Edit</button>
      <button onClick={() => deleteTodo()}>Delete</button>
    </>
  );
};
