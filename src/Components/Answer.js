import React, { useContext } from 'react'
import { Context } from "./Context"

export default function Answer({ answers, correctAnswer}) {

  const {
    isPlayAgain, 
    selectedAnswers, 
    setSelectedAnswers
  } = useContext(Context)
  
  const isSelected = (answer) => answer.selectedAnswer !== answers
  
  const selectedAnswerClass = 
  !isPlayAgain ? 
  (selectedAnswers.every(isSelected) ? "answer-button" : "selected-answer") : 
  (selectedAnswers.every(isSelected) ? "answer-button" : "incorrect-answer")

  const buttonClass = 
  (isPlayAgain && (correctAnswer === answers)) ? 
  "correct-answer" : 
  selectedAnswerClass

  function selectAnswer(){
    setSelectedAnswers(prevState => prevState.map(item => {
      return correctAnswer === item.id ? {...item, selectedAnswer: answers} : {...item}
    }))
  }

  return (
        <button 
          className={buttonClass} 
          onClick={selectAnswer} 
          disabled={isPlayAgain}
        >
          {atob(answers)}
        </button>
  )
}