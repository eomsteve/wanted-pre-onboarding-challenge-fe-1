import { FC, useState, useCallback, useEffect } from 'react';
import { InputEmail } from '../../components/users/InputEmail';
import { InputPassword } from '../../components/users/InputPassword';
import { ConfirmButton } from '../../components/users/ConfirmButton';
import type { UserForm, AuthApiResponse } from '../../API/types';
import { loginApi } from '../../API/auth';
import { signUpApi } from '../../API/auth';
import { useNavigate } from 'react-router-dom';

export const UserPage: FC = () => {
  const navigate = useNavigate();
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [userInputEmail, setUserInputEmail] = useState('');
  const [userInputPassword, setUserInputPassword] = useState('');
  const [isLoginMode, setIsLoginMode] = useState(true);
  const emailInputHandle = useCallback((validation: boolean, email: string) => {
    setIsEmail(() => validation);
    setUserInputEmail(() => email);
  }, []);

  const passwordInputHandle = useCallback(
    (validation: boolean, password: string) => {
      setIsPassword(() => validation);
      setUserInputPassword(() => password);
    },
    []
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit form');
    const data: UserForm = {
      email: userInputEmail,
      password: userInputPassword,
    };
    const responseData = async () => {
      if (isLoginMode) {
        return await loginApi(data);
      } else {
        return await signUpApi(data);
      }
    };

    responseData().then((res: AuthApiResponse) => {
      if (res.message) {
        alert(res.message);
        navigate('/auth');
      } else {
        alert(res.details);
      }
    });
  };

  const handleMode = () => setIsLoginMode(!isLoginMode);
  return (
    <>
      <h1>hello world!</h1>
      <form onSubmit={handleSubmit}>
        <InputEmail inputHandler={emailInputHandle} />
        <InputPassword inputHandler={passwordInputHandle} loginMode={isLoginMode}/>
        <ConfirmButton
          inputCondition={isEmail && isPassword}
          loginMode={isLoginMode}
        />
      </form>
      <span className={`hover:cursor-pointer`} onClick={handleMode}>
        {isLoginMode ? `회원가입 하러가기` : '로그인 하러가기'}
      </span>
    </>
  );
};
