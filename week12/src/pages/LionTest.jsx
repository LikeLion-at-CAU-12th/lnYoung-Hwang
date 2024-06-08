import React, { useState, useEffect } from 'react';
import {getQuestions} from '../apis/qlist.js';
import styled from 'styled-components';


const LionTest = () => {
    const[questions, setQuestions] = useState([]);
    const [answer, setAnswer] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            let questions = await getQuestions();
            setQuestions(questions);
        }
        fetchData();
    },[]);

  return (
    <TestLayout>
        <Title>🦁 당신의 멋사력은？</Title>
        {questions.map((data)=>(
            <QuestionLayout key={data.id}>{data.question}
                {data.choices.map((choice)=>(
                    (<ChoiceLayout>{choice}</ChoiceLayout>)
                ))}
            </QuestionLayout>
            ))}
    </TestLayout>
    
  )
}

export default LionTest;

const Title = styled.div`
    font-size: 30px;
    color: #535353;
    font-weight: 700;
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
const ChoiceLayout = styled.button`
    font-size: 20px;
    color: #535353;
    font-weight: 700;
    width: 150px;
    height: 50px;
    color: #4a4a4a;
    background-color: #b8edfb;
    border-radius: 20px;
    cursor: pointer;
    text-decoration: none;
    font-weight: 500;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    margin-top: 1vw;
    margin-bottom: 1vw;
    
`
