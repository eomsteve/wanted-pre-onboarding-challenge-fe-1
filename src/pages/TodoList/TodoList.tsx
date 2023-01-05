import { FC, useEffect } from 'react';
import { getTodos } from '../../modules/API/todos';

export const TodoPage: FC = () => {
  useEffect(()=>{
    const data = async () => {
      const result = await getTodos();
      console.log(result)
      return result;
      };
      data();
  },[])
  return (
    <>
      <h1>this is root page</h1>
    </>
  );
};
