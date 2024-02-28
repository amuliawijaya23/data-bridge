'use client';
import useAuthData from '@hooks/useAuthenticationData';
import { Typography, Alert, Button, Link } from '@mui/material';

import EmailInput from '@components/Authentication/EmailInput';

export default function ForgotPassword() {
  const { email, emailValidity, error, handleOnChangeEmail } = useAuthData();

  return (
    <>
      <Typography component="h1" variant="h4" sx={{ mb: 1 }}>
        Forgot Password
      </Typography>
      {error && (
        <Alert
          severity="error"
          variant="filled"
          sx={{ mt: 2, mb: 1, display: 'flex', alignItems: 'center' }}>
          {error}
        </Alert>
      )}
      <EmailInput
        input={email}
        isEmailValid={emailValidity}
        onChangeHandler={handleOnChangeEmail}
      />
      <Button
        color="primary"
        fullWidth
        variant="contained"
        // onClick={submitForm}
        sx={{ mt: 2, mb: 1 }}>
        Submit
      </Button>
      <Typography variant="subtitle1" align="center">
        {'Already have an Account? '}
        <Link color="inherit" href="/signin">
          <b>Sign In</b>
        </Link>
      </Typography>
    </>
  );
}
