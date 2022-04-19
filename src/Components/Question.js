import React, { useState, useEffect } from 'react'
import { useAppContext } from "./Context"
import { Buffer } from 'buffer'
import useShuffleArr from '../Hooks/useShuffleArr'
import useMappedAnswers from "../Hooks/useMappedAnswers"

function Question({question, incorrectAnswers, correctAnswer}) {
  
  const arrAnswers = incorrectAnswers.concat(correctAnswer)
  const [shuffledAnswers, setShuffledAnswers] = useState([])
  const { isShuffleAnswers } = useAppContext()
  const shuffleArr = useShuffleArr(arrAnswers)

  useEffect(() => {
    if(isShuffleAnswers){
      setShuffledAnswers(shuffleArr)
    }
  }, [isShuffleAnswers])

  const mappedAnswers = useMappedAnswers(shuffledAnswers, correctAnswer)
  
  // .map((item) => {
  //     return <Answer key={item} answers={item} correctAnswer={correctAnswer}/>
  // })
  const decodedQuestion = Buffer.from(question, 'base64').toString()
  return (
    <div className='question-container' data-testid="container">
        <h3 className='question'>{decodedQuestion}</h3>
        {mappedAnswers}
        <hr className='hr'/>
    </div>
  )
}

export default Question