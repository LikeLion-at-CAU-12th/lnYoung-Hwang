import React from 'react';
import styled from 'styled-components';
import { getPerPage } from '../../apis/userlist';

const PageSelection = ({userData,curPage, offset, totalNum, totalData, setUserData, setCurPage}) => {

    function generateArray(x) {
        const result = [];
        for (let i = 1; i <= x; i++) {
          result.push(i);
        }
        return result;
      }

    let endPage = totalNum/offset;
    let pages = generateArray(endPage);
    //offset에 따라 결정되는 n에 따라 1~n까지의 배열 저장

    const handleClick = (page) => {
        setCurPage(page);
        setUserData(totalData.slice(offset*(page-1), offset*page));
    }
    return (
        <SelectionLayout>{pages.map(
            (val)=>
            <PageBox key={val} 
            $active={val === curPage ? true : false} 
            onClick={() => handleClick(val)}
            >{val}</PageBox>
            )}</SelectionLayout>
    );
};

export default PageSelection;

const SelectionLayout = styled.div`
    display: flex;
    gap: 3rem;
    margin-bottom: 2rem;
`

const PageBox = styled.div`
    font-size: 2rem;
    color: ${(props) => props.$active ? "#000000" : "#C9C9C9"};
    &:hover{
        cursor: pointer;
        color: white;
    }
    
`