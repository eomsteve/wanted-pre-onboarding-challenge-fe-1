import { FC, useState, useCallback } from 'react';
import { InputEmail } from '../../components/users/InputEmail';
import { InputPassword } from '../../components/users/InputPassword';
import { ConfirmButton } from '../../components/users/ConfirmButton';
import type { UserForm, AuthApiResponse } from '../../modules/API/types';
import { loginApi } from '../../modules/API/auth';
import { signUpApi } from '../../modules/API/auth';
import {useNavigate} from 'react-router-dom'

export const UserPage: FC = () => {
  const navigate = useNavigate();
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [userInputEmail, setUserInputEmail] = useState<string>('');
  const [userInputPassword, setUserInputPassword] = useState<string>('');
  const [isLoginMode, setIsLoginMode] = useState<boolean>(true);

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
    if (isLoginMode) {
      loginApi(data).then((res: AuthApiResponse) => {
        if (res.message) {
          alert(res.message);
          res.token && localStorage.setItem('loginToken', res.token);
          navigate('/')
        } else {
          alert(res.details);
        }
      });
    } else {
      signUpApi(data).then((res: AuthApiResponse) => {
        if (res.message) {
          alert(res.message);
          res.token && localStorage.setItem('loginToken', res.token);
          navigate('/')
        } else {
          alert(res.details);
        }
      });
    }
  };

  const handleMode = () => setIsLoginMode(!isLoginMode);
  return (
    <>
      <h1>hello world!</h1>
      <form onSubmit={handleSubmit}>
        <InputEmail inputHandler={emailInputHandle} />
        <InputPassword inputHandler={passwordInputHandle} />
        <ConfirmButton
          inputCondition={isEmail && isPassword}
          loginMode={isLoginMode}
        />
      </form>
      <span className={`hover:cursor-pointer`} onClick={handleMode}>
        {' '}
        {isLoginMode ? `회원가입 하러가기` : '로그인 하러가기'}{' '}
      </span>
    </>
  );
};
