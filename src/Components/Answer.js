import React, { useState, useEffect, useContext } from 'react'
import { Context } from "./Context"

export default function Answer(props) {
  const {setCorrectAnswers, playAgain} = useContext(Context)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [correctAnswer, setCorrectAnswer] = useState(props.correctanswer)
  
  function selectAnswer(){
    setSelectedAnswer(props.answers)
    
  }

  useEffect(() => {
    if(selectedAnswer == correctAnswer){
      setCorrectAnswers(prevState => prevState + 1)
    }
  }, [playAgain])
  

  return (
        <button className='answer-button' onClick={selectAnswer}>{atob(props.answers)}</button>
  )
}
// Make state with object that includes both correct and selected answers