import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { getMyPage } from '../apis/user';
import { useNavigate } from 'react-router-dom';

const Mypage = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    const router = useNavigate();

    useEffect(()=>{
        // 로컬 스토리지에서 access token 가져와 Authorization 헤더에 담아 요청할 것임
        getMyPage(localStorage.getItem("access"))
            .then((data)=>{
                setData(data);
                setLoading(false);
            }).catch((error)=>{
                alert("토큰 기한 만료");
        });
    }, []);

    // 로그아웃 클릭 시 토큰 제거 후 홈으로
    const onClick = () => {
      window.localStorage.removeItem("access");
      window.localStorage.removeItem("refresh");
      router("/");
    }

    //데이터를 받아오기 전에 띄우면 오류발생할 수 있음. 이에 대한 처리 필요
    if(loading) return <div>로딩중임니다 ㅠㅠ</div>

  return (
    <Container>
      <Wrapper>
          <Title>회원정보</Title>
          <div>회원님 성함: {data.name}</div>
          <div>회원님 나이: {data.age}</div>
        </Wrapper>
        <Button onClick={onClick}>로그아웃</Button>
    </Container>
  )
}

export default Mypage

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  border: 3px solid #89cdf6;
  padding: 30px;
  border-radius: 3%;
  font-size: 20px;
  width: 300px;
  div {
    font-size: 25px;
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 30px;
  color: #585858;
  font-family: SUITE;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const Button = styled.div`
    font-weight: 800;
    background-color: #89cdf6;
    color: white;
    padding: 11px;
    border-radius: 10px;
    border: none;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 84px;
    margin-top: 25px;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 3px 3px skyblue;
      color: black;
      background-color: white;
    }
`
