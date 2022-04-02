import { NavLink } from 'react-router-dom';
import { Nav, NavList, NavListItem } from './Navigation.styled';
export default function Navigation() {
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
    </Nav>
  );
  //   return (
  //     <>
  //       <Nav>
  //         <NavList>
  //           <NavListItem>
  //             <NavLink
  //               to="/"
  //               style={({ isActive }) => ({
  //                 color: isActive ? '#dc6300' : '#2a363b',
  //                 textDecoration:  isActive ? 'underline' : 'none',
  //               })}
  //             >
  //               Home
  //             </NavLink>
  //           </NavListItem>
  //           <NavListItem>
  //             <NavLink
  //               to="/movies"
  //               style={({ isActive }) => ({
  //                 color: isActive ? '#dc6300' : '#2a363b',
  //                 textDecoration:  isActive ? 'underline' : 'none',
  //               })}
  //             >
  //               Movies
  //             </NavLink>
  //           </NavListItem>
  //         </NavList>
  //       </Nav>
  //       <Outlet />
  //     </>
  //   );
}
