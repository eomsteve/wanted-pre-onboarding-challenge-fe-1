import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import type { TodoData } from '../../API/types';
import { useDeleteTodo } from '../../hooks/todos/useTodoData';

export const Todo: FC<TodoData> = ({ title, content, id }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { mutate : deleteTodo } = useDeleteTodo(id);
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
      <button onClick={() => deleteTodo()}>Delete</button>
    </>
  );
};
