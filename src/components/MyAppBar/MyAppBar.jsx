import { useSelector } from 'react-redux';
import AuthNav from '../AuthNav/AuthNav.jsx';
import css from './MyAppBar.module.css';
import { UserMenu } from '../UserMenu/UserMenu.jsx';
import { Navigation } from '../Navigation/Navigation.jsx';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';
import { AppBar, Box, Container, Toolbar } from '@mui/material';

export const MyAppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1 }}>
              <Navigation />
            </Box>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
