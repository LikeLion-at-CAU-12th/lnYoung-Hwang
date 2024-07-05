import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { AuthContext } from '../context/AuthProvider';

const Home = () => {
  const { userLogin, setUserLogin, data, loading } =  useContext(AuthContext);

  const router = useNavigate();

  const logout = () => {
      window.localStorage.removeItem("access");
      window.localStorage.removeItem("refresh");
      setUserLogin(false);
  }

  const totest = () => {
    if(!userLogin){
      alert("로그인 먼저 해주세요");
      router("/login")
    }
    else{
      router("/liontest");
    }
  }

  if(loading) return(<div>로딩중임..</div>)

  return (
    <MenuDom>
      <Title>Week 12 Session</Title>
      <Subtitle>✨ Welcome { !userLogin ? (<span> guest님 ✨</span>) : (<span> {data?.name}님✨</span>) 
        }</Subtitle>
      <StyledLink to="/books">
        📚 Library
      </StyledLink>
      <StyledButton onClick={totest}>
        🦁 멋사인 테스트
      </StyledButton>
      {userLogin ? (
          <StyledLink onClick={logout}>
            🐑 로그아웃
          </StyledLink>
        ):(
          <StyledLink to="/login">
            🫎 로그인
          </StyledLink>
        )}
    </MenuDom>
  )
}

export default Home

const MenuDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin: 20px;
`;

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
`;

const Subtitle = styled.div`
  font-size: 20px;
  color: #535353;
  font-weight: 700;
  margin-bottom: 3px;
  margin-top: 3px;
`

/* 이미 만들어진 태그를 다른 태그로 바꿀 수 있음 */
const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;
  font-size: 25px;
  color: #4a4a4a;
  background-color: #b8edfb;
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;
  font-size: 25px;
  color: #4a4a4a;
  background-color: #b8edfb;
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`
