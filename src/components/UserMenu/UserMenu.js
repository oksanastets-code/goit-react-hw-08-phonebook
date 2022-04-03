import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
// import defaultAvatar from './default-avatar.png';
import { Wellcome } from 'components/NavBar/Navigation.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
//   const avatar = defaultAvatar;

  return (
      <div
      >
      {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
          <Wellcome
          >Hello, {name}!
          </Wellcome>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
      Log Out
      </button>
    </div>
  );
}