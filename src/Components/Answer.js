import React, { useState, useEffect, useContext } from 'react'
import { Context } from "./Context"

export default function Answer(props) {
  const {
    setCorrectAnswers, 
    playAgain, 
    selectedAnswers, 
    setSelectedAnswers
  } = useContext(Context)
  
  const [correctAnswer, setCorrectAnswer] = useState(props.correctanswer)
  
  const isSelected = (answer) => answer.selectedAnswer !== props.answers
  
  const isCorrect = (answer) => answer.id === answer.selectAnswer

  const selectedAnswerClass = !playAgain ? (selectedAnswers.every(isSelected) ? "answer-button" : "selected-answer") : (selectedAnswers.every(isSelected) ? "answer-button" : "incorrect-answer")

  const buttonClass = (playAgain && (correctAnswer === props.answers)) ? "correct-answer" : selectedAnswerClass

  function selectAnswer(){
    setSelectedAnswers(prevState => prevState.map(item => {
      return correctAnswer === item.id ? {...item, selectedAnswer: props.answers} : {...item}
    }))
  }

  // useEffect(() => {
  //   if(!selectedAnswers.every(isCorrect)){
  //     setCorrectAnswers(prevState => prevState + 1)
  //   }
  // }, [playAgain])
  
  
  // console.log(selectedAnswer)
  // console.log(props.answers)
  return (
        <button 
        className={buttonClass} 
        onClick={selectAnswer} 
        disabled={playAgain}
        >{atob(props.answers)}</button>
  )
}
// Make state with object that includes both correct and selected answers