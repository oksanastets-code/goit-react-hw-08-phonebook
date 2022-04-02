import { Routes, Route} from 'react-router-dom';
import Container from './components/Container/Container';
import NavBar from 'components/NavBar/NavBar';
import HomeView from 'views/HomeView';
import UserView from 'views/UserView';
import SignUpView from 'views/SignUpView';
import LogInView from 'views/LogInView';

export const App = () => {
  return (
    <Container>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomeView />}></Route>
        <Route path="/user" element={<UserView />}></Route>
        <Route path="/signup" element={<SignUpView />}></Route>
        <Route path="/login" element={<LogInView />}></Route>
      </Routes>
    </Container>
  );
};
