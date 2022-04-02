import { NavLink, Outlet, Link } from 'react-router-dom';
// import { Nav, NavList, NavListItem } from './Navigation.styled'
export default function Navigation() {
    return (
        <nav>
            <Link to="/">Сторінка вітання</Link>
            <ul>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/login">Log In</Link></li>
            </ul>
        </nav>
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
