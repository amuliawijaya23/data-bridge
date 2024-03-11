import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import SignUp from '@app/(authentication)/signup/page';

afterEach(cleanup);

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe('SignUp', () => {
  it('renders without crashing', () => {
    render(<SignUp />);
  });

  it('displays "All fields are required." error message when attempting to sign in with one or more blank input(s)', () => {
    const { getByText, getByTestId } = render(<SignUp />);

    fireEvent.click(getByTestId('sign-up-button'));

    expect(getByText('All fields are required.')).toBeInTheDocument();
  });

  it('displays "Please use a valid email address." error message when attempting to sign in with an invalid email address', () => {
    const { getByText, getByTestId, getByLabelText } = render(<SignUp />);

    fireEvent.change(getByLabelText('Email'), { target: { value: 'email' } });
    fireEvent.change(getByTestId('password-input'), {
      target: { value: 'test' },
    });
    fireEvent.change(getByTestId('confirm-password-input'), {
      target: { value: 'test' },
    });

    fireEvent.click(getByTestId('sign-up-button'));

    expect(getByText('Please use a valid email address.')).toBeInTheDocument();
  });

  it('displays "Please make sure your passwords match." error message when password and confirm password does not match', () => {
    const { getByText, getByTestId, getByLabelText } = render(<SignUp />);

    fireEvent.change(getByLabelText('Email'), {
      target: { value: 'email@test.com' },
    });
    fireEvent.change(getByTestId('password-input'), {
      target: { value: 'test' },
    });
    fireEvent.change(getByTestId('confirm-password-input'), {
      target: { value: 'testing' },
    });

    fireEvent.click(getByTestId('sign-up-button'));

    expect(
      getByText('Please make sure your passwords match.'),
    ).toBeInTheDocument();
  });
});
