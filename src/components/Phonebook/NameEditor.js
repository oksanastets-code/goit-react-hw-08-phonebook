import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { addContact } from '../../redux/PhoneBook/phone-book-operations';
import PropTypes from 'prop-types';
import { Form, Label, InputField } from './Form.styled';
import { Button } from '../Button/Button.styled';
import { getContacts } from 'redux/PhoneBook/phone-book-selectors';
export default function NameEditor() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleForm = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (
      contacts.find(
        contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      const notify = `${name} is already on list`;
      toast.error(notify);
      return;
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="">
        Name
        <InputField
          type="text"
          name="name"
          value={name}
          onChange={handleForm}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder=""
        />
      </Label>
      <Label htmlFor="">
        Number
        <InputField
          type="tel"
          name="number"
          value={number}
          onChange={handleForm}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder=""
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}

NameEditor.propTypes = {
  onSubmit: PropTypes.func,
};
