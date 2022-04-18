import React from "react"
import useShuffleArr from "../useShuffleArr"
import { render, fireEvent, cleanup, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

test("useShuffleArr returns expected array", () => {
    const array = [1 ,2 ,3 ,4]

    expect(useShuffleArr(array)).not.toBe([1, 2, 3, 4])
})