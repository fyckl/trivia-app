import React from "react"
import Start from "../Start"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

let getByTestId

beforeEach(() => {
    const component = render(<Start />)
    getByTestId = component.getByTestId
})


test("Headings render with correct text", () => {
    const headerEl = getByTestId('header')
    const headerElTwo = getByTestId('header-2')

    expect(headerEl.textContent).toBe("Quizzical")
    expect(headerElTwo.textContent).toBe("A game of trivia")
})

test("Headings render with correct classNames", () => {
    const headerEl = getByTestId('header')
    const headerElTwo = getByTestId('header-2')

    expect(headerEl.className).toBe("karla")
    expect(headerElTwo.className).toBe("karla")
})

test("Container has the correct classNames", () => {
    const containerEl = getByTestId('container')
    expect(containerEl.className).toBe("text-center questions-container")
})

   
test("Button has the correct className", () => {
    const buttonEl = getByTestId('button')
    expect(buttonEl.className).toBe('start-button')
})

test("Button has the correct text", () => {
    const buttonEl = getByTestId('button')
    expect(buttonEl.textContent).toBe('Start Quiz')
})