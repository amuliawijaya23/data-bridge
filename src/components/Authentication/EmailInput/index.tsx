'use client';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import React from 'react';

interface InputProps {
  input: string;
  isEmailValid: boolean;
  onChangeHandler: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

const EmailInput = ({ input, isEmailValid, onChangeHandler }: InputProps) => {
  return (
    <FormControl size="small" variant="outlined" sx={{ mt: 1 }}>
      <InputLabel htmlFor="outlined-email">Email</InputLabel>
      <OutlinedInput
        id="outlined-email"
        type="email"
        onChange={onChangeHandler}
        value={input}
        label="Email"
        error={!isEmailValid && input.length > 0}
      />
      {!isEmailValid && input.length > 0 && (
        <FormHelperText>Please use a valid email address.</FormHelperText>
      )}
    </FormControl>
  );
};

export default EmailInput;
