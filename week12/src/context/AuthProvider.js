import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [userLogin, setUserLogin] = useState(false); //유저 로그인 여부
  const [userName, setUserName] = useState("Guest") //유저 이름

  return (
    <AuthContext.Provider value={{userLogin, setUserLogin, userName, setUserName}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider