import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import { Form, Label, InputField } from 'components/Phonebook/NameEditor.styled'

const LogInView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      {/* <h1>Ввійти в свій обліковий запис</h1> */}
      <Form onSubmit={handleSubmit} autoComplete="off">
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

        <button type="submit">Log In</button>
      </Form>
    </>
  );
};
export default LogInView;
