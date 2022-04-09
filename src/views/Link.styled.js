import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavLink = styled(Link)`
  text-decoration: underline;
  color: #ffffff;
  font-weight: 700;
  display: inline-block;
  
   padding: 3px 7px;
  cursor: pointer;
  &:hover,
  &:focus {
    border-radius: 50px;
    background-color: #4caf50;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
  }
`;