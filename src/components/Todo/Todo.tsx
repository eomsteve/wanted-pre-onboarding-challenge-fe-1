import { FC } from 'react';
import { Link } from 'react-router-dom';
import type { TodoData } from '../../modules/API/types';
import { deleteTodo } from '../../modules/API/todos';
export const Todo: FC<TodoData> = ({ title, content, id }) => {
  return (
    <>
      <Link to={`/${id}`}>
        <header>{title}</header>
        <p>{content}</p>
      </Link>
      <button onClick={()=>deleteTodo(id)}>Delete</button>
    </>
  );
};
