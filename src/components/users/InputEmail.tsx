import { FC, useState, useCallback } from 'react';

interface EmailProps {
  inputHandler: Function;
}
export const InputEmail: FC<EmailProps> = ({ inputHandler }) => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const checkEmailValidation = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const userInputEmail = e.target.value;

      if (userInputEmail.includes('@') && userInputEmail.includes('.')) {
        setEmail(()=>userInputEmail);
        setMessage('');
        inputHandler(true, userInputEmail);
      } else {
        setMessage('이메일 형식을 맞춰 주세요.');
        inputHandler(false);
      }
    },
    [email]
  );
  return (
    <>
      <input
        className="border-2"
        type="email"
        onChange={checkEmailValidation}
        required
      />
      <p className="border-2">{message}</p>
    </>
  );
};
