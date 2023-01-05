import { FC, useEffect } from 'react';
import { getTodoById } from '../../modules/API/todos';
import { useParams } from 'react-router-dom';

export const TodoDetail: FC = () => {
  const { id } = useParams();
  useEffect(() => {
    if( id !== undefined){
      const todo = getTodoById(id);
      console.log(todo);
      
    }
  }, []);
  return <>
  <header></header>
  </>;
};
