import { FC, useState, useCallback } from 'react';
import { InputEmail } from '../../components/users/InputEmail';
import { InputPassword } from '../../components/users/InputPassword';
import { ConfirmButton } from '../../components/users/ConfirmButton';
import type { UserForm } from '../../modules/API/types';
import { loginApi } from '../../modules/API/auth';
import { signUpApi } from '../../modules/API/auth';

export const UserPage: FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit form');
  };

  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);

  const emailInputHandle = useCallback((validation : boolean) => {
    setIsEmail(validation);
  }, [isEmail]);

  const passwordInputHandle = useCallback((validation : boolean) => {
    setIsPassword(validation);
  }, [isPassword]);

  return (
    <>
      <h1>hello world!</h1>
      <form onSubmit={handleSubmit}>
        <InputEmail inputHandler={emailInputHandle} />
        <InputPassword inputHandler={passwordInputHandle} />
        <ConfirmButton inputCondition={isEmail && isPassword} />
      </form>
    </>
  );
};
