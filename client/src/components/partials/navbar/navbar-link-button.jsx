import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const StyledNavbarLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.common.black,
  '&.active': {
    color: theme.palette.success.main,
  },
}));

export default StyledNavbarLink;
