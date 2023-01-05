import { FC, useEffect } from 'react';
import { getTodos } from '../../modules/API/todos';

export const TodoPage: FC = () => {
  useEffect(()=>{
    getTodos()
  },[])
  return (
    <>
      <h1>this is root page</h1>
    </>
  );
};
