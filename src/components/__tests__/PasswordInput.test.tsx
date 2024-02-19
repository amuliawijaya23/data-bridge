import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  getByTestId,
} from '@testing-library/react';

import PasswordInput from '@components/Authentication/PasswordInput';

afterEach(cleanup);

describe('PasswordInput', () => {
  let InputProps = {
    input: 'test',
    onChangeHandler: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {},
  };

  it('renders without crashing', () => {
    render(<PasswordInput {...InputProps} />);
  });

  it('displays input as password as default', () => {
    const { getByLabelText } = render(<PasswordInput {...InputProps} />);

    expect(getByLabelText('Password')).toHaveAttribute('type', 'password');
  });

  it('displays visibility icon when input type is set to password', () => {
    const { getByTestId } = render(<PasswordInput {...InputProps} />);

    expect(getByTestId('show-password-icon-on')).toBeInTheDocument();
  });

  it('displays input as text when show password button is triggered', () => {
    const { getByTestId, getByLabelText } = render(
      <PasswordInput {...InputProps} />,
    );
    fireEvent.click(getByTestId('show-password-button'));

    expect(getByLabelText('Password')).toHaveAttribute('type', 'text');
  });

  it('displays visibility off icon when input type is set to text', () => {
    const { getByTestId } = render(<PasswordInput {...InputProps} />);

    fireEvent.click(getByTestId('show-password-button'));

    expect(getByTestId('show-password-icon-off')).toBeInTheDocument();
  });
});
