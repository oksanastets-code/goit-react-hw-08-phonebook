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
              color: isActive ? '#4caf50' : '#ffffff',
              borderBottom: isActive ? '1px solid #4caf50' : 'none',
                            fontWeight: isActive ? '700' : '500',

            })}
          >
            Home
          </NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink
            to="/contacts"
            style={({ isActive }) => ({
              color: isActive ? '#4caf50' : '#ffffff',
              borderBottom: isActive ? '1px solid #4caf50' : 'none',
                            fontWeight: isActive ? '700' : '500',

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
