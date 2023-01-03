import { FC } from 'react';
import { InputEmail } from '../../components/users/InputEmail';
import { InputPassword } from '../../components/users/InputPassword';
import { ConfirmButton } from '../../components/users/ConfirmButton';

export const LoginPage : FC = () => {
  return (
    <>
    <h1>hello world!</h1>
    <div>
      <InputEmail/>
      <InputPassword />
      <ConfirmButton />
    </div>
    </>
  );
}