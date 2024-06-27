import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';


const BookDetail = () => {
  const params = useParams();
  const id = params.id;

  const [books, setBooks] = useState([]);
  const [likes, setLikes] = useState(0);

  const updateLikes = () => {
    setLikes(likes + 1);
  };

  //첫 렌더링 시 책 정보를 받아와 state에 담기
  useEffect(()=>{
    const fetchBooks = async()=>{
      const response = await axios.get('/databases/books.json');
      setBooks(response.data);
    };
    fetchBooks();
  }, []);

  /* 페이지가 변경될때마다 (id가 변경될때마다) like가 0으로. */
  useEffect(()=>{
    setLikes(0);
  },[id])

  const book = books.find((b)=>b.id === parseInt(id));

  // <books가 세팅 되기 전/후의 코드를 짜자.>
  /*렌더링 되기 전에는 books에는 빈 배열이 들어있기 때문에,
  위의 books.find가 실행되게 되면 book에는 undefined 값이 들어가게 된다.
  그러면서 undefined의 속성(book.title, book.author 등)에 접근하면 오류가 발생하므로
  undefined 에 접근하는 것을 막아 오류를 방지하기 위해 아래의 코드를 짠다. */
  if(!book){return(
    <div>찾는 책이 없습니다.</div>
  );
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <h3>{book.author}</h3>
      <p>{book.description}</p>
      <Button onClick={updateLikes}>
        <Icon>💙</Icon> {likes}
      </Button>
    </div>
  )
}

const Button = styled.button`
  background-color: #75b5f5;
  color: #ffffff;
  border: none;
  border-radius: 25px;
  padding: 5px 15px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #9ecfff;
  }

  &:active {
    background-color: #3d9dfd;
  }
`;

const Icon = styled.span`
  margin-right: 8px;
  font-size: 20px;
`;


export default BookDetail