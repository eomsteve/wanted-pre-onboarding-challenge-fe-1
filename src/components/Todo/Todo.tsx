import { FC } from 'react';
import type { CreateUpDateTodoList } from '../../modules/API/types';
export const Todo: FC<CreateUpDateTodoList> = ({ title, content }) => {
  return (
    <>
      <header>{title}</header>
      <p>{content}</p>
    </>
  );
};
