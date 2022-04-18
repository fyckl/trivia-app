import React, { useContext } from 'react'
import Question from './Question'
import useMappedQuestions from '../Hooks/useMappedQuestions'
import { Context, useAppContext } from "./Context"

export default function Questions(props) {
  const {
    arrQuestions, 
    checkAnswers, 
    isPlayAgain, 
    correctAnswers, 
    reset, 
    score
  } = useAppContext()

  // function questions(arr){ arr.map(item => (
  //   <Question 
  //     key={item.question}
  //     question={item.question} 
  //     correctAnswer={item.correct_answer} 
  //     incorrectAnswers={item.incorrect_answers}
  //   />
  // ))
  // }
  
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
