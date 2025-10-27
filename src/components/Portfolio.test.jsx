import { render, screen } from '@testing-library/react';
import Portfolio from './Portfolio';  

test('renders portfolio header', () => {
    render(<Portfolio />);
    const header = screen.getByText(/Portfolio/i);
    expect(header).toBeInTheDocument();
});

test('renders project titles', () => {
    render(<Portfolio />);

    const title = [
        'toolmate',
        'colmaracademy',
        'healthsnap',
        'once upon a time',
        'fitness app'
      ];
    
    title.forEach(title => {
        expect(screen.getByText(title)).toBeInTheDocument();
    });
});