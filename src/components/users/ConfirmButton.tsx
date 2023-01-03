import { FC } from 'react';

export const ConfirmButton : FC = ()=>{
  return (
    <button className="border-2" onClick={()=> console.log("#!@#!")} type="submit"> 로그인 </button>
  )
}