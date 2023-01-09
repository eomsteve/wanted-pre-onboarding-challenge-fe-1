import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import type { TodoData } from '../../modules/API/types';
import { deleteTodo, updateTodo } from '../../modules/API/todos';

export const Todo: FC<TodoData> = ({ title, content, id }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const cancelEdit = () => {
    setIsEdit(false);
  };
  return (
    <>
      <Link to={`/${id}`}>
        <header>{title}</header>
        <p>{content}</p>
      </Link>
      <button onClick={() => setIsEdit(true)}>Edit</button>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </>
  );
};
