import React, { useContext, useState } from 'react'
import { Button, Wrapper } from '../layout/common'
import Form from './Form'
import Modal from '../modal/Modal';
import { ThemeColorContext } from '../../context/context';

const FormSection = () => {
    const mode = useContext(ThemeColorContext);
    const [modal, setModal] = useState(false);

    const handleBtn = () => {
        setModal(true);
    }

  return (
    <Wrapper>
        <Form type='text' inputType='이름' />
        <Form type='email' inputType='이메일' />
        <Button mode={mode.button} onClick={handleBtn}>제출</Button>
          {modal && (
            <Modal setModal={setModal} />
          )}   
    </Wrapper>
  )
}

export default FormSection