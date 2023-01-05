import { FC } from 'react';
import { createTodo } from '../../modules/API/todos';
export const CreateTodoButton: FC = ()=>{

  return (<>
    <button>
      {`ToDo 생성`}
    </button>
  </>);
}