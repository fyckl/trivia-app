import React from "react"
import Question from "../Question"
import * as Context  from "../Context"
import "@testing-library/jest-dom/extend-expect"
import { shallow, configure } from 'enzyme'
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