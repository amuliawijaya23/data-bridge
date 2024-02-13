'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

import { AppBar, Box, Paper, Toolbar, Typography, Button } from '@mui/material';

export default function Home() {
  return (
    <main>
      <Box component={Paper} sx={{ display: 'flex' }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              component="a"
              href="#"
              noWrap
              sx={{
                mr: 2,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                flexGrow: 1,
              }}>
              LOGO
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </main>
  );
}
