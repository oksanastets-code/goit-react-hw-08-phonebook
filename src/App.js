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

export const App = ({ restricted = false }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Container>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomeView />}></Route>
        {/* PrivateRoute */}
        <Route
          path="/contacts"
          element={isLoggedIn ? <UserView /> : <Navigate to="/login" />}
        />
        {/* PublicRoutes */}
        <Route
          path="/register"
          restricted
          element={
            shouldRedirect ? <Navigate to="/contacts" /> : <SignUpView />
          }
        />
        {/* <Route
          path="/login"
          restricted
          element={shouldRedirect ? <Navigate to="/contacts" /> : <LogInView />}
        /> */}
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/contacts" /> : <LogInView />}
        />
      </Routes>
    </Container>
  );
};
