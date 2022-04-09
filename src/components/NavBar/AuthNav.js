import { NavLink } from 'react-router-dom';
import { NavList, NavListItem } from './Navigation.styled';

export default function AuthNav() {
  return (
    <NavList>
      <NavListItem>
        <NavLink
          to="/register"
          style={({ isActive }) => ({
            color: isActive ? '#4caf50' : '#ffffff',
           borderBottom: isActive ? '1px solid #4caf50' : 'none',
            fontWeight: isActive ? '700' : '500',
          })}
        >
          Sign Up
        </NavLink>
      </NavListItem>
      <NavListItem>
        <NavLink
          to="/login"
          style={({ isActive }) => ({
            color: isActive ? '#4caf50' : '#ffffff',
            borderBottom: isActive ? '1px solid #4caf50' : 'none',
            fontWeight: isActive ? '700' : '500',
          })}
        >
          Log In
        </NavLink>
      </NavListItem>
    </NavList>
  );
}
