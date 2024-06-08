import React from 'react'
import { useParams } from 'react-router-dom'

const TestResult = () => {
    const getscore = useParams();
    const score = getscore.num;
  return (
    <div>{score}</div>
  )
}

export default TestResult