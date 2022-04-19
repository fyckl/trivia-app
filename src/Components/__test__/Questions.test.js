import React from "react"
import Questions from "../Questions"
import * as Context  from "../Context"
import "@testing-library/jest-dom/extend-expect"
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test("renders correctly to match snapshot", () => {
    const contextValues = {
        arrQuestions: [], 
        checkAnswers: [], 
        isPlayAgain: true, 
        correctAnswers: [],
        reset: jest.fn(), 
        score: 0
    }

    jest
      .spyOn(Context, 'useAppContext')
      .mockImplementation(() => contextValues);

    const wrapper = shallow(<Questions/>)
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find(Questions)).toBeTruthy();

   
})


test("check answers button conditionally renders", () => {
    const contextValues = {
        arrQuestions: [], 
        checkAnswers: [], 
        isPlayAgain: false, 
        correctAnswers: [],
        reset: jest.fn(), 
        score: 0
    }
    jest
      .spyOn(Context, 'useAppContext')
      .mockImplementation(() => contextValues);

    const wrapper = shallow(<Questions/>)
    expect(wrapper.find("#check-answers")).toHaveLength(1)
})
