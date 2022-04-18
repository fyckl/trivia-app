import React from "react"
import Question from '../../Components/Question'
import useMappedAnswers from "../useMappedAnswers"
import { render, fireEvent, cleanup, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

test("useMappedQuestions returns expected array length", () => {
    const array=[1,2]
    const expectedArr = useMappedAnswers(array)
    expect(expectedArr).toHaveLength(2)
})
