import React, { createContext, useState, useEffect, useContext } from 'react'

const Context = createContext()
const useAppContext = () => useContext(Context);

function ContextProvider(props) {

    const [isStartQuiz, setIsStartQuiz] = useState(false)
    const [arrQuestions, setArrQuestions] = useState([])
    const [isPlayAgain, setIsPlayAgain] = useState(false)
    const [isShuffleAnswers, setIsShuffleAnswers] = useState(false)
    const [isAPIError, setIsAPIError] = useState(false)
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [score, setScore] = useState(0)
    const [selectedAnswers, setSelectedAnswers] = useState([])

    function startQuiz(){
      setIsShuffleAnswers(true)
      setIsStartQuiz(true)
    }

    function newSelectedAnswersArr(){
      setSelectedAnswers(() => {
        const newArr = []
        arrQuestions.forEach(item => {
          newArr.push({id: item.correct_answer, selectedAnswer: ""}) 
        });
        return newArr
      })
    }

    function checkAnswers(){
      setIsShuffleAnswers(false)
      setIsPlayAgain(true)
      setCorrectAnswers(() => {
        const correctAnswersArr = selectedAnswers.filter(item => (
          item.selectedAnswer === item.id
          )) 
          return correctAnswersArr.length
        })
      }
      
      
    function reset(){
      setArrQuestions([])
      getQuestions()
      setIsPlayAgain(false)
      setCorrectAnswers(0)
      setIsShuffleAnswers(true)
    }
    
    function getQuestions(){
      fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple&encode=base64')
      .then(res=> res.json())
      .then(data=> setArrQuestions(data.results))
      .catch(err => {
        setIsStartQuiz(false)
        setIsAPIError(true)
      })
    }

    useEffect(() => {
      setScore(prevState => prevState + correctAnswers)
    }, [correctAnswers])
    
    useEffect(() => {
      newSelectedAnswersArr()
    }, [arrQuestions])
    
    useEffect(() => {
      getQuestions()
    }, [])

    return(
        <Context.Provider 
            value={{
                startQuiz, 
                isStartQuiz, 
                arrQuestions,
                setCorrectAnswers,
                checkAnswers,
                isPlayAgain,
                correctAnswers,
                reset,
                score,
                isShuffleAnswers,
                setSelectedAnswers,
                selectedAnswers,
                isAPIError
        }}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context, useAppContext }