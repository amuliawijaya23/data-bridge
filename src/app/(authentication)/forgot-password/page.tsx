'use client';
import useAuthData from '@hooks/useAuthenticationData';
import { Typography, Alert, Button, Link } from '@mui/material';

import EmailInput from '@components/Authentication/EmailInput';

export default function ForgotPassword() {
  const { email, emailValidity, error, handleOnChangeEmail, handleResetEmail } =
    useAuthData();

  return (
    <>
      <Typography component="h1" variant="h4" sx={{ mb: 1 }}>
        Forgot Password
      </Typography>
      <Typography
        component="span"
        variant="body1"
        sx={{ mb: 1, textAlign: 'start' }}>
        If an account with your email exist, a password reset instruction will
        be sent to your email.
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
        testId="email-input"
        onChangeHandler={handleOnChangeEmail}
      />
      <Button
        color="primary"
        fullWidth
        variant="contained"
        onClick={handleResetEmail}
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
