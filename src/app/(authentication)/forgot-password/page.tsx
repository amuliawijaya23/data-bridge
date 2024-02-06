'use client';
import {
  Typography,
  Alert,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  Button,
} from '@mui/material';

import { useState } from 'react';

export default function ForgotPassword() {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [emailValidity, setEmailValidity] = useState(false);

  return (
    <>
      <Typography component="h1" variant="h4" sx={{ mb: 1 }}>
        Forgot Password
      </Typography>
      {error && (
        <Alert
          severity="error"
          variant="filled"
          sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
          {error}
        </Alert>
      )}
      <FormControl size="small" variant="outlined" sx={{ mt: 1 }}>
        <InputLabel htmlFor="outlined-email">Email</InputLabel>
        <OutlinedInput
          id="outlined-email"
          type="email"
          // onChange={setEmail}
          value={email}
          label="Email"
          error={!emailValidity && email.length > 0}
        />
        {!emailValidity && email.length > 0 && (
          <FormHelperText>Please use a valid email address.</FormHelperText>
        )}
      </FormControl>
      <Button
        color="primary"
        fullWidth
        variant="contained"
        // onClick={submitForm}
        sx={{ mt: 2, mb: 1 }}>
        Submit
      </Button>
    </>
  );
}
