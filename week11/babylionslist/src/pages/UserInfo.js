import React, { useState } from 'react';
import styled from 'styled-components'
import UserFilter from '../components/user/UserFilter';
import UserSection from '../components/user/UserSection';
import PageSelection from '../components/user/PageSelection';

/* UserInfo가 전체 페이지를 나타냄, 이 안에 컴포넌트를 하나씩 넣을 것임! */
/* 부모인 UserInfo에서 state를 선언해야 자식 컴포넌트에 props로 전달 가능!*/

const UserInfo = () => {
    const [userData, setUserData] = useState([]);
    const [curPage, setCurPage] = useState(); //초기 값 === undefined
    const [filter, setFilter] = useState("all") //색상 넣을 때 이용!
    return (
        <MainLayout>
            <h1>🦁12기 아기사자 리스트🦁</h1>
            <ContentBox>
                <UserFilter 
                setFilter={setFilter}
                setUserData={setUserData} 
                setCurPage={setCurPage}/>
                <UserSection userData={userData}/>
                
                { filter === "all" && <PageSelection 
                curPage={curPage}
                setUserData={setUserData}
                setCurPage={setCurPage}/>}
            </ContentBox>
        </MainLayout>
    );
};
/* 전체에서만 목차 뜨도록 하기
filter === "all" && ~~~ : 조건이 만족할 때만 존재할 수 있도록*/

export default UserInfo;

const MainLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    & > h1{
        font-size: 3.5rem;
        margin-top: 5rem;
        margin-bottom: 5rem;
    }
`

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    border-radius: 1rem;
    border: 5px solid #ff7710;
`