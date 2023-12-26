import Home from "@/app/page";
import { render, screen } from "@testing-library/react";


describe('Home page - rendering',() => {
    it('should have Home page text', () => {
        render(<Home />);
        expect(screen.getByText('Home Page')).toBeInTheDocument();
    })

    it('should have a button with a text click me', () => {
        render(<Home />);
        expect(screen.getByRole('button',{name : 'click me'})).toBeInTheDocument();
    })
})