import { FC, useState } from 'react';
import { InputEmail } from '../../components/users/InputEmail';
import { InputPassword } from '../../components/users/InputPassword';
import { ConfirmButton } from '../../components/users/ConfirmButton';
import type { UserForm } from '../../modules/API/types';
import { loginApi } from '../../modules/API/auth';

export const UserPage : FC = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit form");
  };


  return (
    <>
    <h1>hello world!</h1>
    <form onSubmit={handleSubmit}>
      <InputEmail/>
      <InputPassword />
      <ConfirmButton />
    </form>
    </>
  );
}