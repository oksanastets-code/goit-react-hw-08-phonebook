import { NavLink } from 'react-router-dom';
import { NavList, NavListItem } from './Navigation.styled';

export default function AuthNav() {
  return (
    <NavList>
        <NavListItem>
          <NavLink
            to="/register"
            style={({ isActive }) => ({
              color: '#ffffff',
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
              color: '#ffffff',
              borderBottom: isActive ? '1px solid #fff' : 'none',
            })}
          >
            Log In
          </NavLink>
        </NavListItem>
      </NavList>
  );
}