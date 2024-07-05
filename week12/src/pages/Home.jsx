import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { AuthContext } from '../context/AuthProvider';
import { getMyPage } from '../apis/user';


const Home = () => {
  const { userLogin, setUserLogin, userName, setUserName } =  useContext(AuthContext);

  const [data, setData] = useState();
  //const [loading, setLoading] = useState(true);

  const router = useNavigate();

    // 처음에 로그인 여부 확인
    // localstorage로 token 확인
    useEffect(()=>{
      const savedAccessToken = localStorage.getItem("access");
      const savedRefreshToken = localStorage.getItem("refresh");
      if(savedAccessToken != null && savedRefreshToken != null) {
          // 토큰 존재 시
          getMyPage(localStorage.getItem("access"))
          .then((data)=>{
              setData(data);
              setUserName(data.name);
              //setLoading(false);
          }).catch((error)=>{
              // 토큰 기한 만료 시
              alert("토큰 기한 만료");
              window.localStorage.removeItem("access");
              window.localStorage.removeItem("refresh");
              router("/login");
      });
          setUserLogin(true);
      }
  }, [])

  const logout = () => {
      window.localStorage.removeItem("access");
      window.localStorage.removeItem("refresh");
      setUserLogin(false);
      setUserName("Guest");
  }

  const totest = () => {
    if(userLogin === false){
      alert("로그인 먼저 해주세요");
      router("/login")
    }
    else{
      router("/liontest");
    }
  }

  return (
    <MenuDom>
      <Title>Week 12 Session</Title>
      <Subtitle>✨ Welcome {userName}님 ✨</Subtitle>
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
