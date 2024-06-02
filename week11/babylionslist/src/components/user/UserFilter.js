import React from 'react';
import styled from 'styled-components';
import { filterType } from '../../constants/filterType';
import { getGenderUser, getPerPage, getPartUser } from '../../apis/userlist';

/* 필터 버튼을 눌러 API 호출 */

const UserFilter = ({setFilter, setUserData, setCurPage}) => {
    const handleClick = async (type, param) => {
        if(type === "all"){
            const response = await getPerPage(1);
            //response값을 저장하기 위해서 새로운 상태(state)가 필요하다!
            //useState를 이용해 이 값을 저장해주자~
            setUserData(response);
            console.log(response);
            setCurPage(1);
        } else if (type === "gender"){
            const response = await getGenderUser(param);
            setUserData(response);
            console.log(response);
            setCurPage(1);
        } else if (type === "part"){
            const response = await getPartUser(param);
            console.log(response);
            setUserData(response);
            
            setCurPage(1);
        }
        setFilter(param); //다른 값으로도 변경 가능
    }
    return (
        <FilterLayout>
            {filterType.map(
                (data, idx) =>
                <FilterBox key={idx} onClick={() => handleClick(data.type, data.param)}>{data.title}</FilterBox>
            )}
        </FilterLayout>
    );
};

export default UserFilter;

const FilterLayout = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    overflow-x: scroll;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-top: 2rem;
    gap: 2rem;
    /* 자식들 간 간격 */
    &::-webkit-scrollbar{
        display: none;
    }
`

const FilterBox = styled.div`
    display: flex;
    padding: 1rem 4rem 1rem 4rem;
    background-color: "#c9c9c9";
    border-radius: 1rem;
    font-size: 3rem;
    white-space: nowrap;
    /* 웹을 줄여도 줄바꿈이 없게 */
    &:hover{
        cursor: pointer;
        color:white;
    }
`