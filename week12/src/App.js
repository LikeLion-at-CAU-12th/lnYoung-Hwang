import styled from "styled-components";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import BookDetail from "./pages/BookDetail";
import LionTest from "./pages/LionTest";
import TestResult from "./pages/TestResult";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AuthProvider from "./context/AuthProvider";


function App() {
  return (
    <AppDom>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/books" element={<BookList />}>
            <Route path=":id" element={<BookDetail />}/>
        </Route>
        <Route path="/liontest" element={<LionTest />} />
        <Route path="/liontest/:num" element={<TestResult />} />
      </Routes>
      </AuthProvider>
    </AppDom>
  );
}

/* path=":id" 라고만 쓰면, 부모 경로가 앞에 자동으로 붙여짐. */


export default App;

const AppDom = styled.div`
  display: flex;
  width: 100%;
  min-height: 95vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
