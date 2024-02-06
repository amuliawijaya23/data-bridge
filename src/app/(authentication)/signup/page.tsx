'use client';
import { useState } from 'react';
import useAuthData from '../hooks/useAuthData';
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
  Typography,
  Alert,
  Link,
} from '@mui/material';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

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
  } = useAuthData();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };
  return (
    <>
      <Typography component="h1" variant="h4" sx={{ mb: 1 }}>
        Sign Up
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
          onChange={handleOnChangeEmail}
          value={email}
          label="Email"
          error={!emailValidity && email.length > 0}
        />
        {!emailValidity && email.length > 0 && (
          <FormHelperText>Please use a valid email address.</FormHelperText>
        )}
      </FormControl>
      <FormControl sx={{ mt: 1 }} size="small" variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          onChange={handleOnChangePassword}
          value={password}
          label="Password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl sx={{ mt: 1 }} size="small" variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">
          Confirm Password
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-confirm-password"
          type={showPassword ? 'text' : 'password'}
          onChange={handleOnChangeConfirmPassword}
          value={confirmPassword}
          label="Confirm Password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Button
        color="primary"
        fullWidth
        variant="contained"
        // onClick={submitForm}
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
