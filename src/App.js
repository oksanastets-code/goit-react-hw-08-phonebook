import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import Container from './components/Container/Container';
import NavBar from 'components/NavBar/NavBar';
import { authOperations, authSelectors } from 'redux/auth';

const HomeView = lazy(() => import('views/HomeView'));
const UserView = lazy(() => import('views/UserView'));
const SignUpView = lazy(() => import('views/SignUpView'));
const LogInView = lazy(() => import('views/LogInView'));

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
        <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          {/* PublicRoute HomeView*/}
           <Route
            path="/"
            element={isLoggedIn ? <Navigate to="/contacts" /> : <HomeView />}
          />
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
          </Suspense>
      </Container>
    </>
  );
};
