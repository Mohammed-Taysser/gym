import { Container, Stack, useMediaQuery } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import logo from '../assets/images/icons/favicon.ico';
import logoFull from '../assets/images/icons/logo-full.png';
import SearchInput from './navbar/SearchInput';

const drawerWidth = 240;

const SITEMAP = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Exercises',
    link: '/exercises',
  },
  {
    label: 'Body Parts',
    link: '/body-parts',
  },
  {
    label: 'Equipments',
    link: '/equipments',
  },
  {
    label: 'Target Muscles',
    link: '/target-muscles',
  },
];

function Navbar() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const onDrawerToggleClick = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const onDrawerLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component='nav'>
        <Container maxWidth='md'>
          <Toolbar disableGutters>
            <Link to='/'>
              {isMd ? (
                <img
                  src={logoFull}
                  alt='favicon full'
                  className='favicon-full'
                />
              ) : (
                <img src={logo} alt='favicon' className='favicon' />
              )}
            </Link>

            <Box sx={{ flexGrow: 1 }}>
              <Stack
                direction='row'
                justifyContent='end'
                alignItems='center'
                spacing={1}
              >
                {SITEMAP.map((item) => (
                  <Button
                    key={item.link}
                    sx={{
                      color: '#fff',
                      display: { xs: 'none', sm: 'inline-flex' },
                    }}
                    component={Link}
                    to={item.link}
                  >
                    {item.label}
                  </Button>
                ))}

                <SearchInput />

                <IconButton
                  color='inherit'
                  aria-label='open drawer'
                  edge='start'
                  sx={{ display: { md: 'none' } }}
                  onClick={onDrawerToggleClick}
                >
                  <CiMenuFries />
                </IconButton>
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <nav>
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={onDrawerToggleClick}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          <Box sx={{ textAlign: 'center', pt: 2 }}>
            <Link to='/'>
              <img src={logoFull} alt='favicon' className='favicon-full' />
            </Link>

            <Divider sx={{ pt: 2 }} />

            <List>
              {SITEMAP.map((link) => (
                <ListItem key={link.link} disablePadding>
                  <ListItemButton
                    onClick={onDrawerLinkClick}
                    sx={{ textAlign: 'center' }}
                    component={Link}
                    to={link.link}
                  >
                    <ListItemText primary={link.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navbar;
