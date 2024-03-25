'use client';
import useAuthData from '@hooks/useAuthenticationData';
import { Button, Alert, Typography, Link } from '@mui/material';

import EmailInput from '@components/Authentication/EmailInput';
import PasswordInput from '@components/Authentication/PasswordInput';

export default function SignIn() {
  const {
    email,
    emailValidity,
    password,
    error,
    handleOnChangeEmail,
    handleOnChangePassword,
    handleSignIn,
  } = useAuthData();

  return (
    <>
      <Typography component="h1" variant="h4" sx={{ mb: 1 }}>
        Sign In
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
      <PasswordInput
        input={password}
        testId="password-input"
        onChangeHandler={handleOnChangePassword}
      />
      <Typography variant="subtitle1" align="left" sx={{ mt: 1 }}>
        <Link color="inherit" href="/forgot-password">
          <b>Forgot Password?</b>
        </Link>
      </Typography>
      <Button
        type="submit"
        color="primary"
        fullWidth
        variant="contained"
        onClick={handleSignIn}
        data-testid="sign-in-button"
        sx={{ mt: 2, mb: 1 }}>
        Sign In
      </Button>
      <Typography variant="subtitle1" align="center">
        {'Not a member? '}
        <Link color="inherit" href="/signup">
          <b>Sign Up</b>
        </Link>
      </Typography>
    </>
  );
}
