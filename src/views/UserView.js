import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import NameEditor from '../components/Phonebook/NameEditor';
import ContactList from '../components/Phonebook/ContactList';
import Filter from '../components/Phonebook/Filter';
import { Container } from '../components/Phonebook/PhoneBook.styled';
import { fetchContacts } from 'redux/PhoneBook/phone-book-operations';

const UserView = (params) => { 
    const dispatch = useDispatch();
    useEffect(() => dispatch(fetchContacts()), [dispatch]);
     return (
        
        <Container>
          <Toaster />
         {/* <h1>Phonebook</h1> */}

          <NameEditor />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </Container>
    
    );

}
export default UserView;