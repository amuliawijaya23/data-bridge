'use client';
import { useState } from 'react';
import {
  Box,
  Button,
  Alert,
  Typography,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function SignIn() {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [emailValidity, setEmailValidity] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  return (
    <Box
      component="form"
      noValidate
      sx={{
        mt: 2,
        display: 'flex',
        flexDirection: 'column',
        width: { xs: '100%', md: '80%', xl: '50%' },
      }}>
      <Typography component="h1" variant="h4" sx={{ mb: 1 }}>
        Sign In
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
      <FormControl sx={{ mt: 1 }} size="small" variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          // onChange={setPassword}
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
      <Button
        type="submit"
        color="primary"
        fullWidth
        variant="contained"
        // onClick={signIn}
        sx={{ mt: 2, mb: 1 }}>
        Sign In
      </Button>
    </Box>
  );
}
