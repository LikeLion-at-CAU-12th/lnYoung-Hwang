import React from 'react';
import styled from 'styled-components';
import { filterType } from '../../constants/filterType';
import { getGenderUser, getPerPage, getPartUser } from '../../apis/userlist';


/* 필터 버튼을 눌러 API 호출 */



const UserFilter = ({setFilter, setUserData, setCurPage, setTotalNum, setTotalData, totalData, offset, filter}) => {

    const handleClick = async (type, param) => {

        if(type === "all"){
            let response = await getPerPage(0);
            setTotalData(response);
            //response값을 저장하기 위해서 새로운 상태(state)가 필요하다!
            //useState를 이용해 이 값을 저장해주자~

            setTotalNum(response.length); // 총 명수
            
             //offset 설정에 따라 자르기

            setUserData(response.slice(0,offset));
            //처음 All 클릭 시 첫번째 값들 나오도록
        
            console.log(response[0]);
            setCurPage(1);
        } else if (type === "gender"){
            const response = await getGenderUser(param);
            setUserData(response);
            setCurPage(1);
        } else if (type === "part"){
            const response = await getPartUser(param);
            setUserData(response);
            setCurPage(1);
        }
        setFilter(param); //다른 값으로도 변경 가능
        console.log(param);
    }
    return (
        <FilterLayout>
            {filterType.map(
                (data, idx) =>
                <FilterBox key={idx} onClick={() => handleClick(data.type, data.param)} $active={data.param === filter ? true : false} >{data.title}</FilterBox>
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
    color: ${(props) => props.$active ? 'rgba(255, 170, 100, 1)' : "black"};
    border-radius: 1rem;
    font-size: 3rem;
    white-space: nowrap;
    /* 웹을 줄여도 줄바꿈이 없게 */
    &:hover{
        cursor: pointer;
        color:white;
    }
`