import React from 'react'
import { emailAtom, userNameAtom } from '../../recoil/atom';
import { useRecoilState } from 'recoil';

const Form = ({type, inputType}) => {
    const [userName, setUserName] = useRecoilState(userNameAtom);
    const [email, setEmail] = useRecoilState(emailAtom);

    const onChange = (e) => {
        const value = e.target.value;
        if(inputType === '이름'){
            setUserName(value);
        }
        else{
            setEmail(value);
        }
    }
  return (
    <>
    <div>{inputType}</div>
    <input type={type} onChange={onChange}/>
    </>
  )
}

export default Form