import React, { useContext } from 'react'
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from 'styled-components'
import { emailAtom, isSubmitedAtom, userNameAtom } from '../../recoil/atom';
import { Button } from '../layout/common';
import { useNavigate } from 'react-router-dom'
import { ThemeColorContext } from '../../context/context'; 


const Modal = ( {setModal} ) => {
  const navigate = useNavigate();
  const userName = useRecoilValue(userNameAtom);
  const email = useRecoilValue(emailAtom);
  const setIsSubmited = useSetRecoilState(isSubmitedAtom);
  const mode = useContext(ThemeColorContext);

  const handleConfirm = () => {
    setIsSubmited(true);
    navigate('/mypage');
    console.log(setModal);
  }

  return (
    <ModalBackground>
      <Container>
        <div>정보를 다시 한번 확인해주세요.</div>
        <div>이름: {userName}</div>
        <div>이메일: {email}</div>
        <Buttons>
          <Button onClick={()=>setModal(false)} mode={mode.button}>다시작성</Button>
          <Button onClick={handleConfirm} mode={mode.button}>확인</Button>
        </Buttons>
      </Container>
    </ModalBackground>
  )
}

export default Modal

const ModalBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  background-color: #eaeaea;
  width: 70%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3%;
`


