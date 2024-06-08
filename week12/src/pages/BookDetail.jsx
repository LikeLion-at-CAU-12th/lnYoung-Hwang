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

  console.log(book);

  /* useEffect가 실행되기 전에 book을 찾게 되어서 오류, 아래와 같이 짜기! */
  /* books가 세팅 되기 전/후의 코드를 짜자.*/
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