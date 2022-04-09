import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/PhoneBook/phone-book-actions';
import { getFilter } from '../../redux/PhoneBook/phone-book-selectors';
import { Label, InputField } from './NameEditor.styled';

export default function Filter () {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return  (
    <Label htmlFor="">
      Find contacts by name
      <InputField
        type="text"
        name="filter"
        value={value}
        onChange={(e)=>dispatch(changeFilter(e.currentTarget.value))}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Enter key word"
      />
    </Label>
  )
};
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};