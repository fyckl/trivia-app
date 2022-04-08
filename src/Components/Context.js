import React, { useContext, useState, useEffect } from 'react'

const Context = React.createContext()

function ContextProvider(props) {

    const [startQuiz, setStartQuiz] = useState(false)
    const [arrQuestions, setArrQuestions] = useState([])
    const [playAgain, setPlayAgain] = useState(false)
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [score, setScore] = useState(0)
    const [shuffleAnswers, setShuffleAnswers] = useState(false)

    function quizStart(){
      setShuffleAnswers(true)
      setStartQuiz(true)
    }

    function checkAnswers(){
      setShuffleAnswers(false)
      setPlayAgain(true)
    }

    useEffect(() => {
      setScore(prevState => prevState + correctAnswers)
    }, [correctAnswers])

    function reset(){
      setArrQuestions([])
      getQuestions()
      setPlayAgain(false)
      setCorrectAnswers(0)
      setShuffleAnswers(true)
    }

    function getQuestions(){
      fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple&encode=base64')
      .then(res=> res.json())
      .then(data=> setArrQuestions(data.results))
    }

    
    // console.log(arrQuestions)
    useEffect(() => {
      getQuestions()
    }, [])

    return(
        <Context.Provider 
            value={{
                quizStart, 
                startQuiz, 
                arrQuestions,
                setCorrectAnswers,
                checkAnswers,
                playAgain,
                correctAnswers,
                reset,
                score,
                shuffleAnswers
        }}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}