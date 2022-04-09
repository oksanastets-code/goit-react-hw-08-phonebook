import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import Container from './components/Container/Container';
import NavBar from 'components/NavBar/NavBar';
import HomeView from 'views/HomeView';
import UserView from 'views/UserView';
import SignUpView from 'views/SignUpView';
import LogInView from 'views/LogInView';
// import PublicRoute from './components/PublicRoute';
import { authOperations, authSelectors } from 'redux/auth';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <Container>
        <NavBar />
      </Container>
      <Container>
        <Routes>
           <Route
            path="/"
            element={isLoggedIn ? <Navigate to="/contacts" /> : <HomeView />}
          />
          {/* <Route path="/" element={<HomeView />} /> */}
          {/* PrivateRoute UserView*/}
          <Route
            path="/contacts"
            element={isLoggedIn ? <UserView /> : <Navigate to="/login" />}
          />
          {/* PublicRoute SignUpView*/}
          <Route
            path="/register"
            element={isLoggedIn ? <Navigate to="/" /> : <SignUpView />}
          />
          {/* PublicRoute LogInView*/}
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/contacts" /> : <LogInView />}
          />
        </Routes>
      </Container>
    </>
  );
};
