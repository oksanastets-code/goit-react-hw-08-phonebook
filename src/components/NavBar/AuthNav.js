import { NavLink } from 'react-router-dom';
import { NavList, NavListItem } from './Navigation.styled';

export default function AuthNav() {
  return (
    <NavList>
        <NavListItem>
          <NavLink
            to="/register"
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