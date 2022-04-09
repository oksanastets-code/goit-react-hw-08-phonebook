import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import { Form, Label, InputField } from 'components/Phonebook/Form.styled';
import { Button } from 'components/Button/Button.styled';

const SignUpView = () => {
   const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <Label>
          Name
          <InputField
            type="text"
            name="name"
            value={name} onChange={handleChange}
          />
        </Label>

        <Label>
          Email
          <InputField
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>

        <Label>
          Password
          <InputField
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>

        <Button type="submit">Sign Up</Button>
      </Form>
    </>
  );
};
export default SignUpView;
