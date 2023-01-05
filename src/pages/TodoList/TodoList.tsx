import { FC, useEffect, useState } from 'react';
import { getTodos } from '../../modules/API/todos';
import { useNavigate, Outlet, Link } from 'react-router-dom';
import { isLoggedIn } from '../../modules/API/axiosUtils';
import { TodoData } from '../../modules/API/types';
import { Todo } from '../../components/Todo/Todo';
import { CreateTodoButton } from '../../components/Todo/CreateTodoButton';

export const TodoPage: FC = () => {
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState<TodoData[]>([]);
  //goto auth page when not logged in
  useEffect(() => {
    if (isLoggedIn()) {
      const data = async () => {
        const result = await getTodos();
        console.log(result);
        return result;
      };
      data();
    } else {
      navigate('/auth');
    }
  }, []);

  return (
    <>
      <h1>this is root page</h1>
        <CreateTodoButton/>
        <br />
      <ul>
        {todoList.map(({ title, content, id }) => {
          return (
            <Link key={id} to={`todos/${id}`}>
              <Todo title={title} content={content} />
            </Link>
          );
        })}
      </ul>
      <Outlet />
    </>
  );
};
