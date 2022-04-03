import { NavLink } from 'react-router-dom';
import { NavList, NavListItem } from './Navigation.styled';

// const styles = {
//   link: {
//     display: 'inline-block',
//     textDecoration: 'none',
//     padding: 12,
//     fontWeight: 700,
//     color: '#2A363B',
//   },
//   activeLink: {
//     color: '#E84A5F',
//   },
// };

export default function AuthNav() {
  return (
    <NavList>
        <NavListItem>
          <NavLink
            to="/signup"
            style={({ isActive }) => ({
              color: isActive ? '#dc6300' : '#2a363b',
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            Sign Up
          </NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink
            to="/login"
            style={({ isActive }) => ({
              color: isActive ? '#dc6300' : '#2a363b',
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            Log In
          </NavLink>
        </NavListItem>
      </NavList>
  );
}