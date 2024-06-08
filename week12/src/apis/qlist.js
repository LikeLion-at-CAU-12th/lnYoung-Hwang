import axios from "axios";

const baseURL = 'https://gominzipsession.o-r.kr/';

export const getQuestions = async() => {
    const response = await axios.get(`${baseURL}liontest/question`);
    return response.data.questions;
}

export const getScore = async(answers) => {
    const response = await axios.post(`${baseURL}liontest/result`,{
        "answers" : answers
    });
    return response.data.correctCount;
}

export const getResult = async(score) => {
    const response = await axios.get(`${baseURL}liontest/result/${score}`);
    return response.data;
}

