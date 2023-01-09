import { FC, useEffect, useState } from 'react';
import { getTodos } from '../../API/todos';
import { useNavigate, Outlet, Link } from 'react-router-dom';
import { isLoggedIn } from '../../API/axiosUtils';
import { TodoData } from '../../API/types';
import { Todo } from '../../components/Todo/Todo';
import { CreateTodoButton } from '../../components/Todo/CreateTodoButton';
import { useRecoilState } from 'recoil';
import { useQuery } from 'react-query';
export const TodoPage: FC = () => {
  const navigate = useNavigate();
  const { data } = useQuery<{ data: TodoData[] }>('todos', getTodos);
  console.log('data', data);
  //goto auth page when not logged in
  useEffect(() => {
    if (!isLoggedIn()) navigate('/auth');
  }, []);

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
