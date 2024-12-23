import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations.js';
import { selectIsRefreshing, selectUser } from '../../redux/auth/selectors.js';
import css from './UserMenu.module.css';
import { Button } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {isRefreshing ? '' : user.name}</p>
      <Button
        color="inherit"
        endIcon={<ExitToAppIcon />}
        onClick={() => dispatch(logout())}
      >
        Logout
      </Button>
    </div>
  );
};
