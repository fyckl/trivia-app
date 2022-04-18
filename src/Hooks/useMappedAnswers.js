import React from "react"
import Answer from "../Components/Answer"

export default function useMappedQuestions(arr, correctAnswer){
    return arr.map((item) => {
        return <Answer key={item} answers={item} correctAnswer={correctAnswer}/>
    })
}