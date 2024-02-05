import {
  Unstable_Grid2 as Grid,
  Paper,
  Box,
  Typography,
  Avatar,
} from '@mui/material';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Grid container component={Paper} sx={{ height: '100vh' }}>
      <Grid
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url("/background.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'white',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
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
          {children}
        </Box>
      </Grid>
    </Grid>
  );
}
