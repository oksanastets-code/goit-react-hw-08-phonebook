import React from 'react';
import { Toaster } from 'react-hot-toast';
import NameEditor from '../components/Phonebook/NameEditor';
import ContactList from '../components/Phonebook/ContactList';
import Filter from '../components/Phonebook/Filter';
import { Container } from '../components/Phonebook/PhoneBook.styled';

const UserView = () => { 
     return (
         <>
        <h1>Тут буде телефонна книжка</h1>
        <Container>
          <Toaster />
          <h1>Phonebook</h1>
          <NameEditor />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </Container>
      </>
    );

}
export default UserView;