import axios from "axios";

const baseURL = 'https://gominzipsession.o-r.kr/';

export const getQuestions = async() => {
    const response = await axios.get(`${baseURL}liontest/question`);
    return response.data.questions;
}

