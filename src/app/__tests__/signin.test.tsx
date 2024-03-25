import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import SignIn from '@app/(authentication)/signin/page';

afterEach(cleanup);

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe('SignIn', () => {
  it('renders without crashing', () => {
    render(<SignIn />);
  });

  it('displays "All fields are required." error message when attempting to sign in with one or more blank input(s)', () => {
    const { getByText, getByTestId } = render(<SignIn />);

    fireEvent.click(getByTestId('sign-in-button'));

    expect(getByText('All fields are required.')).toBeInTheDocument();
  });

  it('displays "Please use a valid email address." error message when attempting to sign in with an invalid email address', () => {
    const { getByText, getByTestId, getByLabelText } = render(<SignIn />);

    fireEvent.change(getByLabelText('Email'), { target: { value: 'email' } });
    fireEvent.change(getByLabelText('Password'), { target: { value: 'test' } });

    fireEvent.click(getByTestId('sign-in-button'));

    expect(getByText('Please use a valid email address.')).toBeInTheDocument();
  });
});
