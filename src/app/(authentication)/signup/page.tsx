'use client';
import useAuthData from '@hooks/useAuthenticationData';
import { Button, Typography, Alert, Link } from '@mui/material';

import EmailInput from '@components/Authentication/EmailInput';
import PasswordInput from '@components/Authentication/PasswordInput';

export default function SignUp() {
  const {
    email,
    emailValidity,
    password,
    confirmPassword,
    error,
    handleOnChangeEmail,
    handleOnChangePassword,
    handleOnChangeConfirmPassword,
    handleSignUp,
  } = useAuthData();

  return (
    <>
      <Typography component="h1" variant="h4" sx={{ mb: 1 }}>
        Sign Up
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
      <PasswordInput
        input={confirmPassword}
        testId="confirm-password-input"
        onChangeHandler={handleOnChangeConfirmPassword}
      />
      <Button
        color="primary"
        fullWidth
        variant="contained"
        data-testid="sign-up-button"
        onClick={handleSignUp}
        sx={{ mt: 2, mb: 1 }}>
        Sign Up
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
