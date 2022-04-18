import React from "react"
import Question from '../../Components/Question'
import useMappedQuestions from "../useMappedQuestions"
import { render, fireEvent, cleanup, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

test("useMappedQuestions returns expected array", () => {
    const array=([
        {question: "test1",
        correct_answer: "test1",
        incorrect_answers: ["test1", "test"]},

        {question: "test2",
        correct_answer: "test2",
        incorrect_answers: ["test2", "test"]}
    ])
    const expectedArr = useMappedQuestions(array)
    expect(expectedArr).toHaveLength(2)
})

