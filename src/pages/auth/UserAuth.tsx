import { FC, useState, useCallback } from 'react';
import { InputEmail } from '../../components/users/InputEmail';
import { InputPassword } from '../../components/users/InputPassword';
import { ConfirmButton } from '../../components/users/ConfirmButton';
import type { UserForm } from '../../modules/API/types';
import { loginApi } from '../../modules/API/auth';
import { signUpApi } from '../../modules/API/auth';

export const UserPage: FC = () => {
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [userInputEmail, setUserInputEmail] = useState<string>('');
  const [userInputPassword, setUserInputPassword] = useState<string>('');

  const emailInputHandle = useCallback(
    (validation: boolean, email: string) => {
      setIsEmail(() => validation);
      setUserInputEmail(() => email);
    },
    [isEmail]
  );

  const passwordInputHandle = useCallback(
    (validation: boolean, password: string) => {
      setIsPassword(() => validation);
      setUserInputPassword(() => password);
    },
    [isPassword]
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit form');
    const data: UserForm = {
      userEmail: userInputEmail,
      userPassword: userInputPassword,
    };
    loginApi(data).then(res => {
      alert(res.details)
    });
  };

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
