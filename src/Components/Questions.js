import React from 'react'
import useMappedQuestions from '../Hooks/useMappedQuestions'
import { useAppContext } from "./Context"

export default function Questions(props) {
  const {
    arrQuestions, 
    checkAnswers, 
    isPlayAgain, 
    correctAnswers, 
    reset, 
    score
  } = useAppContext()

  return (
    <div className='text-center questions-container' data-testid="container">
      {useMappedQuestions(arrQuestions)}

      {
        isPlayAgain ? 
        <div className='flex' id="post-game-details-container">
          <h4 className='inter'>You got {correctAnswers}/5 questions right</h4>
          <button className='again-button' onClick={reset}>Play again</button>
        </div> : 
        <button className='check-button' onClick={checkAnswers} id="check-answers">Check answers</button>
      }

      <h4 className='inter score'>Score: {score}</h4>
    </div>
  )
}
