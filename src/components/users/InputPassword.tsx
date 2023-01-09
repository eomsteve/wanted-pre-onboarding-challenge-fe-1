import React, { FC, useCallback, useState } from 'react';

interface PasswordProps {
  inputHandler: Function;
}
export const InputPassword: FC<PasswordProps> = ({ inputHandler }) => {
  // need state refactoring
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const checkPasswordValidation = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const userInputPassword = e.target.value;

      if (userInputPassword.length < 8) {
        setMessage('비밀번호는 8자리 이상입니다.');
        inputHandler(false, '');
      } else {
        setPassword(() => userInputPassword);
        setMessage('');
        inputHandler(true, userInputPassword);
      }
    },
    [password]
  );
  return (
    <>
      <input
        className="border-2"
        type="password"
        onChange={checkPasswordValidation}
        required
      />
      <p className="border-2">{message}</p>
    </>
  );
};
