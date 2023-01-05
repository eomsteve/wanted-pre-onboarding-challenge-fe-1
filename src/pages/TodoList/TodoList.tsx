import { FC, useEffect } from 'react';
import { getTodos } from '../../modules/API/todos';
import { useNavigate } from 'react-router-dom';
import { isLoggedIn } from '../../modules/API/axiosUtils';

export const TodoPage: FC = () => {
  const navigate = useNavigate();
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
    </>
  );
};
