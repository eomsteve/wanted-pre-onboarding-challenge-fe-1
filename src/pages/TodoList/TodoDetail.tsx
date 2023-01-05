import { FC, useEffect, useState } from 'react';
import { getTodoById } from '../../modules/API/todos';
import { useParams } from 'react-router-dom';
import type { TodoData } from '../../modules/API/types';

export const TodoDetail: FC = () => {
  const { id } = useParams();
  const [todoData, setTodoData] = useState<TodoData>();
  useEffect(() => {
    if (id !== undefined) {
      const todo = async () => {
        const data = await getTodoById(id);
        console.log('detail todo data: ', data);
        setTodoData(() => data.data);
      };
      todo();
    }
  }, [id]);
  return (
    <div>
      {todoData && (
        <div>
          <header>title : {todoData.title}</header>
          <main>content : {todoData.content}</main>
          <span>id : {todoData.id}</span>
          <ul>
            <li>created at : {todoData.createdAt}</li>
            <li>created at : {todoData.updatedAt}</li>
          </ul>
        </div>
      )}
    </div>
  );
};
