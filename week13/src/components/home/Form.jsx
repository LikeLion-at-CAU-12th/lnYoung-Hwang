import React from 'react'
import { emailAtom, userNameAtom } from '../../recoil/atom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

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
    <Container>
      <InputType>{inputType}</InputType>
      <Input type={type} onChange={onChange}/>
    </Container>
    </>
  )
}

export default Form

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin : 1vw;
`

const InputType = styled.span`
  font-size: 1.1rem;
  margin-right: 2vw;
`

const Input = styled.input`
  height : 23px;
`