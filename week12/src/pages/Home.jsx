import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Home = () => {
  return (
    <MenuDom>
      <Title>Week 12 Session</Title>
      <StyledLink to="/books">
        📚 Library
      </StyledLink>
      <StyledLink to="/liontest">
        🦁 멋사인 테스트
      </StyledLink>
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

