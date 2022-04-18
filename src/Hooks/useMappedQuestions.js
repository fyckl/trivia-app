import React from 'react'
import Question from '../Components/Question'

export default function useMappedQuestions(arr) {
        
    return arr.map(item => (
    <Question 
        key={item.question}
        question={item.question} 
        correctAnswer={item.correct_answer} 
        incorrectAnswers={item.incorrect_answers}
    />
    ))
   
}
