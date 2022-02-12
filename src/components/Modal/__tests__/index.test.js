import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const mockToggleModal = jest.fn();
const currentPhoto = {
  name: 'Park bench',
  category: 'landscape',
  description: 'This is a test',
  index: 1
};

afterEach(cleanup);

describe('Modal is rendering', () => {
  it('renders', () => {
    render(<Modal
      onClose={mockToggleModal}
      currentPhoto={currentPhoto}
    />);
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Modal 
      onClose={mockToggleModal}
      currentPhoto={currentPhoto}
    />);
    expect(asFragment()).toMatchSnapshot()
  });
});

describe('Click Event', () => {
  it('calls onClose handler', () => {  
    const { getByText } = render(<Modal 
      onClose={mockToggleModal}
      currentPhoto={currentPhoto}
    />);

    fireEvent.click(getByText('Close This Modal'));

    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
});