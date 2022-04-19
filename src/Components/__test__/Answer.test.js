import React from "react"
import Answer from "../Answer"
import * as Context  from "../Context"
import "@testing-library/jest-dom/extend-expect"
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test("answer renders correctly and matches snapshot", () => {
    const contextValues = {
        isPlayAgain: false,
        selectedAnswers:[],
        setSelectedAnswers:jest.fn()
    }
    jest
      .spyOn(Context, 'useAppContext')
      .mockImplementation(() => contextValues);

    const wrapper = shallow(<Answer answers={[]} />)

    expect(wrapper.html()).toMatchSnapshot()
})