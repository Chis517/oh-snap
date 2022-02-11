import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

const categories = [
  { 
    name: 'portraits',
    description: 'Portraits of people in my life'
  }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup)

describe('Contact is rendering', () => {
  it('renders', () => {
    render(<Contact
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
      contactSelected={mockContactSelected}
      setContactSelected={mockSetContactSelected}
    />);
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Contact />)
    expect(asFragment()).toMatchSnapshot()
  });

  it('matches text content', () => {
    const { getByTestId } = render(<Contact />);

    expect(getByTestId('h1tag')).toHaveTextContent('Contact Me');
    expect(getByTestId('btn')).toHaveTextContent('Submit');
  });
});