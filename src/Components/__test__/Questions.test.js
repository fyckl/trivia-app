import React from "react"
import Questions from "../Questions"
import * as Context  from "../Context"
import App from "../../App"
import { fireEvent, cleanup, screen, render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { Enzyme, shallow, configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
// let getByTestId

// beforeEach(() => {
//     const component = render(
//         <ContextProvider>
//             <App>
//                 <Questions />
//             </App>
//         </ContextProvider>
//     )
//     getByTestId = component.getByTestId

// })


// test("Container renders with correct classNames", () => {
//     const containerEl = getByTestId("container")
//     console.log(containerEl.children)
//     expect(containerEl.className).toBe("text-center questions-container")
// })

// test("enzyme dive", () => {
//     const TestComponent = () => (
//         <NameContext.Provider value="Provided Value">
//             <MyComponent />
//         </NameContext.Provider>
//     );
//     const element = shallow(<TestComponent />);
//     expect(element.find(MyComponent).dive().text()).toBe("Provided Value");

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


test("check answers button conditonally renders", () => {
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