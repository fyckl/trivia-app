import React, { useState, useEffect, useContext } from 'react'
import Answer from './Answer'
import { Context } from "./Context"

function Question({question, incorrectAnswers, correctAnswer}) {

  const arrAnswers = incorrectAnswers.concat(correctAnswer)
  const [shuffledAnswers, setShuffledAnswers] = useState([])
  const { isShuffleAnswers } = useContext(Context)
  
  function shuffleArr(arr){
    
    let currentIndex = arr.length, randomIndex
    
    while(currentIndex !== 0){

      randomIndex = Math.floor(Math.random() * currentIndex)

      currentIndex--

      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex], arr[currentIndex]]

    }
    
    return arr
  }

  useEffect(() => {
    if(isShuffleAnswers){
      setShuffledAnswers(shuffleArr(arrAnswers))
    }
  }, [isShuffleAnswers])

  const answers = shuffledAnswers.map((item) => {
      return <Answer key={item} answers={item} correctAnswer={correctAnswer}/>
  })

  return (
    <div className='question-container'>
        <h3 className='question'>{atob(question)}</h3>
        {answers}
        <hr className='hr'/>
    </div>
  )
}

export default Question