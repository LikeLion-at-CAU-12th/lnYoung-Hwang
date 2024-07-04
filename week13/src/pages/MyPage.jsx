import React, { useContext, useEffect } from 'react'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import { emailAtom, isSubmitedAtom, userNameAtom } from '../recoil/atom'
import { Button, Title, Wrapper } from '../components/layout/common';
import { ThemeColorContext } from '../context/context';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
    const userName = useRecoilValue(userNameAtom);
    const mode = useContext(ThemeColorContext);
    const navigate = useNavigate();

    const resetUsername = useResetRecoilState(userNameAtom);
    const resetEmail = useResetRecoilState(emailAtom);
    const reset = useResetRecoilState(isSubmitedAtom);

    const handleReset = () => {
        resetUsername();
        resetEmail();
        reset();
        navigate('/');
    };

    useEffect(()=>{
      window.addEventListener('popstate', handleReset);
    }, [])
    
  return (
    <Wrapper>
        <Title>
            Welcome {userName}!
        </Title>
        <Button mode={mode.button} onClick={handleReset}>뒤로가기</Button>
    </Wrapper>
  )
}

export default MyPage