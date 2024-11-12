import {useEffect, useState} from 'react';

import {AppBar, Toolbar, Box, Container} from '@mui/material';

import {HeaderNavbarLocale} from './components/locale';
import {HeaderNavbarLinks} from './components/links';

export const HeaderNavbar = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(typeof window !== 'undefined');
  }, []);

  if (!isClient) return null;

  return (
    <AppBar
      position="fixed"
      component="nav"
      color="inherit"
      elevation={0}
      sx={{
        bgcolor: '#ffffff99',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 0 1rem 0.5rem rgba(0 0 0 / 0.015)',
      }}
    >
      <Container maxWidth="md" disableGutters>
        <Toolbar>
          <HeaderNavbarLinks />
          <Box flexGrow={1} />
          <HeaderNavbarLocale />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
