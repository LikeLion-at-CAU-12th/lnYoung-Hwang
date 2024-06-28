import React, { useContext, useEffect, useState } from 'react'
import styled from "styled-components";
import { Button } from './common';
import { ThemeColorContext } from '../../context/context';
import { useRecoilState, useRecoilValue } from 'recoil';
import { dateAtom, emailAtom, isSubmitedAtom, userNameAtom } from '../../recoil/atom';

const Layout = ({children}) => {
    const context = useContext(ThemeColorContext);
    const [mode, setMode] = useState(context.blueTheme); 
    const userName = useRecoilValue(userNameAtom);
    const email = useRecoilValue(emailAtom);
    const isSubmited = useRecoilValue(isSubmitedAtom);

    const [date, setDate] = useRecoilState(dateAtom);

    var arrDayStr = ['일','월','화','수','목','금','토'];
    
    useEffect(()=>{
      var nowDate = new Date();
      var parsedDate = nowDate.getFullYear() + '년 ' + (nowDate.getMonth()+1)+'월 '+nowDate.getDate()+'일 ('+arrDayStr[nowDate.getDay()]+')';
      setDate(parsedDate);
    },[]);

    const handleMode = (e) => {
        const value = e.target.value;
        if(value === 'blue'){
            setMode(context.blueTheme);
        }
        else if(value === 'green'){
            setMode(context.greenTheme);
        }
        else{
            setMode(context.pinkTheme);
        }
    }

  return (
    <ThemeColorContext.Provider value={mode}>
        <Wrapper>
            <Header mode={mode.main}>
                <Button value='blue' onClick={handleMode}>blue</Button>
                <Button value='green' onClick={handleMode}>green</Button>
                <Button value='pink' onClick={handleMode}>pink</Button>
            </Header>
            <div>{children}</div>
            <Footer mode={mode.main}>
              <div>{isSubmited ? `${userName}의 공간 | ${email}` : 'LikeLion FE'}</div>
                
                <div>{date}</div>
                
            </Footer>
        </Wrapper>
    </ThemeColorContext.Provider>
    
  )
}

export default Layout

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.mode};
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
  width: 100%;
  padding: 2%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.mode};
`;
