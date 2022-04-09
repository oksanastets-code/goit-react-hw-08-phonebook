import styled from 'styled-components';
export const Form = styled.form`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  width: 60%;
`;
export const Label = styled.label`
  font-weight: 500;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const InputField = styled.input`
  margin-top: 10px;
  padding: 15px;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;