'use client';
import useAuthData from '../hooks';
import {
  Typography,
  Alert,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  Button,
  Link,
} from '@mui/material';

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
      <FormControl size="small" variant="outlined" sx={{ mt: 1 }}>
        <InputLabel htmlFor="outlined-email">Email</InputLabel>
        <OutlinedInput
          id="outlined-email"
          type="email"
          onChange={handleOnChangeEmail}
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
      <Typography variant="subtitle1" align="center">
        {'Already have an Account? '}
        <Link color="inherit" href="/signin">
          <b>Sign In</b>
        </Link>
      </Typography>
    </>
  );
}
