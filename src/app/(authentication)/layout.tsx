import {
  Unstable_Grid2 as Grid,
  Paper,
  Box,
  Typography,
  Avatar,
  Link,
} from '@mui/material';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const Copyright = () => {
    return (
      <Typography variant="body2" align="center" sx={{ mt: 5 }}>
        {'Copyright © '}
        <Link color="inherit" href="#">
          DataBridge
        </Link>
        {` ${new Date().getFullYear()}`}
        {'.'}
      </Typography>
    );
  };

  return (
    <Grid container component={Paper} sx={{ height: '100vh' }}>
      <Grid xs={false} sm={4} md={7} />
      <Grid xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}>
          <Avatar src="" alt="logo" sx={{ width: 100, height: 100, mb: 1 }} />
          <Box
            component="form"
            noValidate
            sx={{
              mt: 2,
              display: 'flex',
              flexDirection: 'column',
              width: { xs: '100%', md: '80%', xl: '50%' },
            }}>
            {children}
          </Box>
          <Copyright />
        </Box>
      </Grid>
    </Grid>
  );
}
