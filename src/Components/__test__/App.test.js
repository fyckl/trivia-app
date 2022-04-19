import App from '../../App'
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import userEvent from "@testing-library/user-event"
import { ContextProvider } from '../Context'

describe("<App />", () => {
    beforeEach(() => {
      render(
          <ContextProvider>
                <App />
          </ContextProvider>
      );
    });
    
    describe("when page is initialized", () => {
      it("button renders correctly", () => {
        expect(screen.getByText('Start Quiz')).toBeTruthy();
      });
    });
  
    describe("when the button is clicked", () => {
      beforeEach(() => {
        userEvent.click(screen.getByText('Start Quiz'));
      });
  
      it("button conditionally renders out after clicked", () => {
        
        expect(screen.queryByText('Start Quiz')).toBeFalsy();
      });
      
    });
  });
