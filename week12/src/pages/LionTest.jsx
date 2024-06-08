import React, { useState, useEffect } from 'react';
import {getQuestions, getScore} from '../apis/qlist.js';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const LionTest = () => {
    const[questions, setQuestions] = useState([]);
    const [answer, setAnswer] = useState([0, 0, 0, 0, 0]);
    const navigate = useNavigate();

    //문제 데이터 불러오기
    useEffect(() => {
        const fetchData = async() => {
            let questions = await getQuestions();
            setQuestions(questions);
        }
        fetchData();
    },[]);

    //고른 답 담는 함수
    const markAnswer = (Qidx, Aidx) => {
        const newAnswer = [...answer]; //이전에 체크한 답들에 추가적으로 새 답을 담기 위해
        let Qid = Qidx - 1;
        let Aid = Aidx + 1;
        newAnswer[Qid] = Aid;
        setAnswer(newAnswer);
    }

    
    const markScore = async() => {
        const score = await getScore(answer);
        console.log(score);
        navigate(`/liontest/${score}`);
    }

  return (
    <TestLayout>
        <Title>🦁 당신의 멋사력은？</Title>
        {questions.map((data)=>(
            <QuestionLayout key={data.id}>
            <QuestionContent>Q{data.id}. {data.question}</QuestionContent>
                {data.choices.map((choice, idx)=>(
                    (<ChoiceLayout key={idx} 
                        onClick={(e)=>{
                        markAnswer(data.id, idx);
                    }}
                    $active={answer[data.id - 1] === idx+1 ? true : false}
                    >{choice}</ChoiceLayout>)
                ))}
            </QuestionLayout>
            ))}
        <SubmitLayout onClick={markScore}>결과보기</SubmitLayout>
    </TestLayout>
    
    )
}

export default LionTest;

const Title = styled.div`
    font-size: 30px;
    color: #535353;
    font-weight: 700;
    margin-top: 8vw;
    margin-bottom: 3vw;
`

const TestLayout = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;

`
const QuestionLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    color: #535353;
    font-weight: 700;
    margin-top: 2vw;
    margin-bottom: 2vw;
`
const QuestionContent = styled.div`
    margin-bottom: 2vw;
    margin-top: 1vw;
`

const ChoiceLayout = styled.button`
    font-size: 20px;
    color: #535353;
    width: 150px;
    height: 50px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: 530;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    margin-top: 1vw;
    margin-bottom: 1vw;
    background-color: ${(props) => props.$active ?  "#ffe08a" : "#b8edfb"};
    
`
const SubmitLayout = styled.button`
    font-size: 20px;
    font-weight: 700;
    width: 180px;
    height: 50px;
    color: #4a4a4a;
    border-radius: 5px;
    background-color: #b8edfb;
    cursor: pointer;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    margin-top: 5vw;
    margin-bottom: 10vw;
`