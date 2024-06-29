import React, { useContext, useState } from 'react'
import { Button, Wrapper } from '../layout/common'
import Form from './Form'
import Modal from '../modal/Modal';
import { ThemeColorContext } from '../../context/context';
import styled from 'styled-components';

const FormSection = () => {
    const mode = useContext(ThemeColorContext);
    const [modal, setModal] = useState(false);

    const handleBtn = () => {
        setModal(true);
    }

  return (
    <Wrapper>
        <FormContainer>
          <Form type='text' inputType='이름' />
          <Form type='email' inputType='이메일' />
          <FormBtn mode={mode.button} onClick={handleBtn}>&nbsp;제출&nbsp;</FormBtn>
        </FormContainer>
          {modal && (
            <Modal setModal={setModal} />
          )}   
    </Wrapper>
  )
}

export default FormSection

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 4px rgba(55, 55, 55, 0.738) dashed;
  border-radius: 8px;
  padding: 40px 30px 40px 30px;
`

const FormBtn = styled.button`
  background-color: ${(props) => props.mode};
  width: 25%;
  border: none;
  color: black;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  white-space: nowrap;
  margin-top: 25px;
`;