import { FC, useEffect,useState } from 'react';
import { getTodos } from '../../modules/API/todos';
import { useNavigate, Outlet } from 'react-router-dom';
import { isLoggedIn } from '../../modules/API/axiosUtils';
import { TodoData } from '../../modules/API/types';
import { Todo } from '../../components/Todo/Todo';

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
      <ul>
        {todoList.map(({title, content, id}) =>{
          return <Todo key={id} title={title} content={content}/>
        })}
      </ul>
      <Outlet />
    </>
  );
};
