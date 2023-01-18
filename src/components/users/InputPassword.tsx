import React, { FC, useCallback, useEffect, useState } from 'react';

interface PasswordProps {
  inputHandler: Function;
  loginMode: boolean;
}
export const InputPassword: FC<PasswordProps> = ({
  inputHandler,
  loginMode,
}) => {
  // need state refactoring
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [message, setMessage] = useState('');
  const [confirmMessage, setConfirmMessage] = useState('');

  const checkPasswordValidation = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const userInputPassword = e.target.value;
      if (userInputPassword.length < 8) {
        setMessage('비밀번호는 8자리 이상입니다.');
        inputHandler(false, '');
      } else {
        setPassword(() => userInputPassword);
        setMessage('');
      }
    },
    [password]
  );

  const checkPasswordConfirmation = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const userInputPassword = e.target.value;
      if (userInputPassword === password) {
        inputHandler(true, userInputPassword);
        setConfirmMessage('');
      } else {
        setConfirmMessage('비밀번호가 일치하지 않습니다.');
        inputHandler(false, '');
      }
      setPasswordConfirm(() => userInputPassword);
    },
    [passwordConfirm]
  );
  useEffect(() => {
    // inputHandler(false, '');
    console.log('password changed');
  }, [password, passwordConfirm]);
  return (
    <>
      <input
        className="border-2"
        type="password"
        onChange={checkPasswordValidation}
        required
      />
      <p className="border-2">{message}</p>
      {!loginMode && (
        <>
          <input
            className="password-confirm border-2"
            type="password"
            onChange={checkPasswordConfirmation}
            required
          />
          <p className="border-2">{confirmMessage}</p>
        </>
      )}
    </>
  );
};
