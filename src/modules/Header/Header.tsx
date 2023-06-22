import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import CategoryMenu from './CategoryMenu';

const categories = ['Мужское', 'Женское', 'Аксессуары', 'Бренды', 'Скидки'];

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function Header(props: any) {
  const [hoverCategory, setHoverCategory] = useState<string | null>(null);

  function ElevationScroll(props: Props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar
          className='header'
          color='inherit'
          position='fixed'
          onMouseLeave={e => setHoverCategory(null)}
        >
          <Container
            disableGutters={true}
            maxWidth='lg'>
            <Toolbar disableGutters>
              <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                MONQIS
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {categories.map((category) => (
                  <Button
                    key={category}
                    onMouseEnter={e => setHoverCategory(category)}
                    sx={{ my: 2, color: 'black', display: 'block' }}
                  >
                    {category}
                  </Button>
                ))}
              </Box>
            </Toolbar>
            <CategoryMenu category={hoverCategory} />
          </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}
export default Header;