import axios from "axios";
import { getNewRefreshToken } from "./user";


//커스텀 axios
//액세스 토큰을 이용해 로그인
//interceptor는 중간에서 값을 가로채서 성공 / 실패 시 각각 해당 경우 처리.
export const getAuthAxios = (token) => {
    const authAxios = axios.create({
        baseURL: `http://yangzzago.kro.kr:3000`,
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });

    // axios 인스턴스로 인터셉터 설정
    authAxios.interceptors.response.use(
        //응답이 잘 왔을 경우 받은 응답을 반환
        (response) => response.data,

        //에러 처리 - access token이 완료되었을 경우
        async(error) => {
            const result = getNewRefreshToken(); // 새로운 액세스 토큰과 리프레시 토큰 가져옴
             //에러 객체에 접근해서 해당 요청의 Authorization 헤더를 새로운 액세스 토큰으로 바꿔줌
            error.config.headers.Authorization = result.accessToken;
            // 로컬 스토리지에 새로 발급받은 액세스 토큰과 리프레시 토큰 저장
            localStorage.setItem("access", result.accessToken);
            localStorage.setItem("refresh", result.refreshToken);
            return (await axios.get(error.config.url, error.config)).data;
             //에러가 발생한 요청의 url을 그대로 가져와서 사용하고, 필요한 데이터들은
             //error.config 객체 내에 담겨있기 때문에 그대로 다시 가져와서 get 요청
             // 즉, 에러 발생한 지점에 대해 다시 발급한 토큰을 보냄
        } 
    );
    return authAxios;
}       