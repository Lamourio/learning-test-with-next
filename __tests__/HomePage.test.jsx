import Home from "@/app/page";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('Home page',() => {
        describe('rendering', () => {
            it('should have Home page text', () => {
                render(<Home />);
                expect(screen.getByText('Home Page')).toBeInTheDocument();
            })
        
            it('should have a button with a text click me', () => {
                render(<Home />);
                expect(screen.getByRole('button',{name : 'click me'})).toBeInTheDocument();
            })
        
            it('should have input field with label Enter Random Text', () => {
                render(<Home />);
                expect(screen.getByLabelText(/Enter Random/)).toBeInTheDocument();
            })
        
            it('should have input field with a place holder text search', () => {
                render(<Home />);
                expect(screen.getByPlaceholderText(/Search/)).toBeInTheDocument();
            })
        
            it('should have input field with a place holder text search', () => {
                render(<Home />);
                expect(screen.getByDisplayValue(/AUDI/)).toBeInTheDocument();
            })
        
            it('should not find element with text: this is the text!', () => {
                render(<Home  />)
                expect(screen.queryByText("This is the text!")).not.toBeInTheDocument();
                
            })
        })

        describe('Behavior',() => {
            it('should click on show button and find new text', async () => {
                render(<Home />);
                expect(screen.queryByText("This is the text!")).not.toBeInTheDocument();
                const showTextButton = screen.getByRole('button',{name : "Show Text"});
                await userEvent.click(showTextButton);
                // expect(screen.getByText("This is the text!")).toBeInTheDocument();
                // findBy* will throw a error after 1000ms
                // expect(await screen.findByText('This is the text!',{},{timeout : 5000})).toBeInTheDocument();

                await waitFor(() => {
                    expect(screen.getByText("This is the text!")).toBeInTheDocument();
                },{timeout : 3000})
            })
        });
});

