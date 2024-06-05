import React, { useState } from 'react';
import styled from 'styled-components';

const PageSelection = ({userData, curPage, offset, totalData, filter, setUserData, setCurPage, pages}) => {


    const handleClick = (page) => {
        setUserData(totalData.slice(offset*(page-1), offset*page));
        setCurPage(page);
    };
    
    return (
        <SelectionLayout>{pages.map(
            (val)=>
            <PageBox key={val} 
            $active={val === curPage ? true : false} 
            onClick={() => handleClick(val)
            }
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