import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {getResult} from '../apis/qlist.js';
import styled from 'styled-components';

const TestResult = () => {
    const getscore = useParams();
    const score = getscore.num;
    const [resultImg, setResultImg] = useState();
    const [resultTitle, setResultTitle] = useState();

    //api 호출
    useEffect(()=>{
      const fetchData = async() => {
        const result = await getResult(score);
        setResultImg(result.resultImg);
        setResultTitle(result.resultTitle);
      }
      fetchData();
    },[]);

    /*if(!resultImg || !resultTitle){return (
    <div>결과 오류</div>
  );} */
  

  return (
    <ResultLayout>
        <Title>🐶🐍🦒🐥나의 멋사력은?🦁🐯🐒🐕☘️</Title>
        <ScoreLayout>{score}/5</ScoreLayout>
        <ResultImgLayout src={`${resultImg}`} alt="이미지오류"></ResultImgLayout>
        <ResultTitleLayout>{resultTitle}</ResultTitleLayout>
    </ResultLayout>
  )
}

export default TestResult

const Title = styled.div`
    font-size: 25px;
    color: #444444;
    font-weight: 700;
    margin-bottom: 3vw;
`

const ScoreLayout = styled.div`
  font-size: 19px;
    color: #444444;
    font-weight: 700;
    margin-bottom: 3vw;
`

const ResultLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
`

const ResultTitleLayout = styled.div`
    font-size: 25px;
    color: #444444;
    font-weight: 700;
`

const ResultImgLayout = styled.image`
  margin-bottom: 5vw;
  content: url(
    ${(props)=>props.src}
  );
`