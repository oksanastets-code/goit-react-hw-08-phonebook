import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import { Wellcome } from 'components/NavBar/Navigation.styled';
import { Button } from '../Button/Button.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
      <div
      >
          <Wellcome
          >Hello, {name}!
          </Wellcome>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
      Log Out
      </Button>
    </div>
  );
}