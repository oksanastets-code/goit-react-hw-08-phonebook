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
                color: isActive ? '#dc6300' : '#2a363b',
                textDecoration: isActive ? 'underline' : 'none',
              })}
            >
              Сторінка вітання
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink
              to="/user"
              style={({ isActive }) => ({
                color: isActive ? '#dc6300' : '#2a363b',
                textDecoration: isActive ? 'underline' : 'none',
              })}
            >
              Сторінка користувача
            </NavLink>
          </NavListItem>
      </NavList>
      
      { isLoggedIn ? <UserMenu /> : <AuthNav />}
        
        
      </Nav>
      

  );
}
