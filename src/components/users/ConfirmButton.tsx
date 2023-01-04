import { FC } from 'react';
interface ConfirmProps {
  inputCondition: boolean;
  loginMode : boolean;
}
export const ConfirmButton: FC<ConfirmProps> = ({ inputCondition, loginMode }) => {
  return (
    <button
      className={`border-2 ${inputCondition ? ' ' : 'bg-gray-200'}`}
      onClick={() => console.log('폼 보내기')}
      type="submit"
      disabled={!inputCondition}
    >
      {loginMode ? '로그인' : '회원가입'}
    </button>
  );
};
