import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Nav, NavList, NavListItem } from './Navigation.styled';
import AuthNav from './AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { authSelectors } from 'redux/auth';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Nav>
      <NavList>
        <NavListItem>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: '#ffffff',
              borderBottom: isActive ? '1px solid #fff' : 'none',
            })}
          >
            Home
          </NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink
            to="/contacts"
            style={({ isActive }) => ({
              color: '#ffffff',
              borderBottom: isActive ? '1px solid #fff' : 'none',
            })}
          >
           Phonebook
          </NavLink>
        </NavListItem>
      </NavList>

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Nav>
  );
}
