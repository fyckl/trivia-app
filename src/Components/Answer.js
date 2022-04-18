import React, { useContext } from 'react'
import { Context, useAppContext } from "./Context"
import { Buffer } from 'buffer'

export default function Answer({ answers, correctAnswer}) {

  const {
    isPlayAgain, 
    selectedAnswers, 
    setSelectedAnswers
  } = useAppContext()
  
  const selectedAnswer = (answer) => answer.selectedAnswer !== answers
  const isSelected = selectedAnswers.every(selectedAnswer)

  const selectedAnswerClass = 
  !isPlayAgain ? 
  (isSelected ? "answer-button" : "selected-answer") : 
  (isSelected ? "answer-button" : "incorrect-answer")

  const buttonClass = 
  (isPlayAgain && (correctAnswer === answers)) ? 
  "correct-answer" : 
  selectedAnswerClass

  const decodedAnswers = Buffer.from(answers, 'base64').toString()
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
          {decodedAnswers}
        </button>
  )
}