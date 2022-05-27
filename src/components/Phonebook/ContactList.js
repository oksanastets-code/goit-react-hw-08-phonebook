import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/PhoneBook/phone-book-operations';
import { getFoundedContacts } from '../../redux/PhoneBook/phone-book-selectors';
import {
  ContactItem,
  List,
  ContactData,
} from './ContactList.styled';
import { Button } from '../Button/Button.styled';

import { useEffect } from 'react';

export default function ContactList() {
  const contacts = useSelector(state => getFoundedContacts(state));
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(deleteContact(id));
  useEffect(() => {dispatch(fetchContacts()) }, [dispatch])
  return (
    // <ListWrapper>
      <List>
        {contacts.map(({ id, name, number }) => (
          <ContactItem key={id}>
            <ContactData>
              {name}: {number}
            </ContactData>
            <Button onClick={() => onDeleteContact(id)}>
              Delete
            </Button>
          </ContactItem>
        ))}
      </List>
    // </ListWrapper>
  )
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      nick: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};