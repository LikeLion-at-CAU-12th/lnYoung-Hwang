import React, { createContext, useEffect, useState } from 'react'
import { getMyPage } from '../apis/user';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [userLogin, setUserLogin] = useState(false); //유저 로그인 여부
  const [data, setData] = useState(); // 로그인 유저 정보
  const [loading, setLoading] = useState(true);

  const router = useNavigate();

  // 로그인 여부 확인(토큰 확인)을 경로 변경 시 마다 확인
  useEffect(()=>{
    const checkUserLogin = () => {
      setLoading(true);
      const savedAccessToken = localStorage.getItem("access");
      const savedRefreshToken = localStorage.getItem("refresh");
      if(savedAccessToken != null && savedRefreshToken != null) {
        // 토큰 존재 시
        getMyPage(localStorage.getItem("access"))
        .then((data)=>{   
            setData(data);
            setUserLogin(true);
        }).catch((error)=>{
            // 토큰 기한 만료 시
            alert("토큰 기한 만료");
            window.localStorage.removeItem("access");
            window.localStorage.removeItem("refresh");
            setUserLogin(false);
            router("/login");
        });
       }
      else{
        setUserLogin(false);
        setData(null);
      }
      setLoading(false);
    }
    checkUserLogin();
  },[router])

  return (
    <AuthContext.Provider value={{userLogin, setUserLogin, data, loading}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider