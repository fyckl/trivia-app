import React from "react"
import Question from "../Question"
import * as Context  from "../Context"
import App from "../../App"
import { fireEvent, cleanup, screen, render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { Enzyme, shallow, configure, mount } from 'enzyme'
import { Buffer } from 'buffer'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test("renders correctly to match snapshot", () => {
    const contextValues = {
        isShuffleAnswers: true
    }

    jest
      .spyOn(Context, 'useAppContext')
      .mockImplementation(() => contextValues);

    const wrapper = shallow(<Question incorrectAnswers={[1,2,3]} correctAnswer={[4]} question=""/>)
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find(Question)).toBeTruthy();

   
})