import { render, cleanup } from '@testing-library/react';

import EmailInput from '@components/Authentication/EmailInput';
import React from 'react';

afterEach(cleanup);

describe('EmailInput', () => {
  let InputProps = {
    input: 'testing@testing.com',
    isEmailValid: true,
    onChangeHandler: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {},
  };

  it('renders without crashing', () => {
    render(<EmailInput {...InputProps} />);
  });

  it('it renders "Please use a valid email address." helper text when entered an invalid email address', () => {
    InputProps = { ...InputProps, input: 'testing', isEmailValid: false };
    const { getByText } = render(<EmailInput {...InputProps} />);

    expect(getByText('Please use a valid email address.')).toBeInTheDocument();
  });
});
