import { FC } from 'react';
interface ConfirmProps {
  inputCondition: boolean;
}
export const ConfirmButton: FC<ConfirmProps> = ({ inputCondition }) => {
  return (
    <button
      className={`border-2 ${inputCondition ? ' ' : 'bg-gray-200'}`}
      onClick={() => console.log('#!@#!')}
      type="submit"
    >
      로그인
    </button>
  );
};
