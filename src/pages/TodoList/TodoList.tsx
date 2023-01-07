import { FC, useEffect, useState } from 'react';
import { getTodos } from '../../modules/API/todos';
import { useNavigate, Outlet, Link } from 'react-router-dom';
import { isLoggedIn } from '../../modules/API/axiosUtils';
import { TodoData } from '../../modules/API/types';
import { Todo } from '../../components/Todo/Todo';
import { CreateTodoButton } from '../../components/Todo/CreateTodoButton';
import { todoState } from '../../modules/recoil/atom/todos';
import { useRecoilState } from 'recoil';
export const TodoPage: FC = () => {
  const navigate = useNavigate();
  const [todoList, setTodoList] = useRecoilState<TodoData[]>(todoState);
  //goto auth page when not logged in
  useEffect(() => {
    if (isLoggedIn()) {
      const requestTodos = async () => {
        const result = await getTodos();
        setTodoList(result.data);
      };
      requestTodos();
    } else {
      navigate('/auth');
    }
  }, []);

  return (
    <>
      <h1>this is root page</h1>
      <CreateTodoButton />
      <br />
      <ul>
        {todoList.map(({ title, content, id }) => {
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
