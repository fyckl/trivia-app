import React from "react"
import App from "../App"
import * as Context  from "../Components/Context"
import { fireEvent, cleanup, screen, render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { Enzyme, shallow, configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test("renders correctly to match snapshot", () => {
    const contextValues = {
        startQuiz: jest.fn(), 
        isStartQuiz: false, 
        arrQuestions:[], 
        isAPIError: false
    }

    jest
      .spyOn(Context, 'useAppContext')
      .mockImplementation(() => contextValues);

    const wrapper = shallow(<App/>)
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find(App)).toBeTruthy();

   
})

test("renders correctly to match snapshot if there is an API error", () => {
    const contextValues = {
        startQuiz: jest.fn(), 
        isStartQuiz: false, 
        arrQuestions:[], 
        isAPIError: true
    }

    jest
      .spyOn(Context, 'useAppContext')
      .mockImplementation(() => contextValues);

    const wrapper = shallow(<App/>)
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find(App)).toBeTruthy();

   
})

test("renders correctly to match snapshot if isStartQuiz is true", () => {
    const contextValues = {
        startQuiz: jest.fn(), 
        isStartQuiz: true, 
        arrQuestions:[], 
        isAPIError: true
    }

    jest
      .spyOn(Context, 'useAppContext')
      .mockImplementation(() => contextValues);

    const wrapper = shallow(<App/>)
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find(App)).toBeTruthy();

   
})

test("renders correctly to match snapshot if arrQuestions length is 5 and isStartQuiz true", () => {
  const contextValues = {
      startQuiz: jest.fn(), 
      isStartQuiz: true, 
      arrQuestions:[1,2,3,4,5], 
      isAPIError: true
  }

  jest
    .spyOn(Context, 'useAppContext')
    .mockImplementation(() => contextValues);

  const wrapper = shallow(<App/>)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find(App)).toBeTruthy();

 
})