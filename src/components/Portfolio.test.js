import { render, screen } from '@testing-library/react';
import Portfolio from './Portfolio';  

test('renders portfolio header', () => {
    render(<Portfolio />);
    const header = screen.getByText(/Portfolio/i);
    expect(header).toBeInTheDocument();
});