import { FC, useEffect, useState } from 'react';
import { useNavigate, Outlet, Link } from 'react-router-dom';
import { isLoggedIn } from '../../API/axiosUtils';
import { Todo } from '../../components/Todo/Todo';
import { CreateTodoButton } from '../../components/Todo/CreateTodoButton';
import { useGetTodos } from '../../hooks/todos/useTodoData';
export const TodoPage: FC = () => {
  const navigate = useNavigate();
  //goto auth page when not logged in
  useEffect(() => {
    if (!isLoggedIn()) navigate('/auth');
  }, []);
  // fetch todo list data using react-query
  const { data, isLoading } = useGetTodos();
  // 아마 suspense로 refactoring
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h1>this is todo list page</h1>
      <CreateTodoButton />
      <br />
      <ul>
        {data &&
          data.data.map(({ title, content, id }) => {
            return (
              <li key={id} className="mb-3">
                <Todo title={title} content={content} id={id} />
              </li>
            );
          })}
      </ul>
      <hr />
      <div>
        <Outlet />
      </div>
    </>
  );
};
