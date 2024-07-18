import axios from "axios";
import { getAuthAxios } from "./authAxios";

const baseURL = `http://yangzzago.kro.kr:3000`;


export const signUp = async(id, pw, name, age) =>{
    const result = await axios.post(`${baseURL}/signup`,{
        id,
        pw,
        name,
        age,
    });
    return result;
}

export const login = async(id, pw) => {
    const result = await axios.post(`${baseURL}/login`,{
        id,
        pw,
    });
    return result.data;
}

export const getMyPage = async (token) => {
    // 로컬스토리지에 저장된 액세스 토큰으로 데이터 요청
    const authAxios = getAuthAxios(token);
    const result = authAxios.get("/mypage");
    return result;
}

//액세스 토큰이 만료되었을 경우에 이 함수를 요청하는 것임.
export const getNewRefreshToken = async() => {
    try{
        const accessToken = localStorage.getItem("access");
        const refreshToken = localStorage.getItem("refresh");

        // 리프레시 토큰 확인 후, 새로운 액세스 토큰 발급해줌
        const result = await axios.post(
            `${baseURL}/refresh`,
            {
                refreshToken,
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return result.data;
    } catch(error){
        // 리프레시 토큰이 만료되었을 경우
        return false;
    }
}