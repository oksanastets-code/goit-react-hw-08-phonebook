import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const List = styled.ul`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
`;
export const ContactData = styled.p``;
export const DeleteButton = styled.button``;
