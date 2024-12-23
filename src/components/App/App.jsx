import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Loader from '../Loader/Loader.jsx';
import RegisterPage from '../../pages/RegisterPage/RegisterPage.jsx';
import LoginPage from '../../pages/LoginPage/LoginPage.jsx';
import HomePage from '../../pages/HomePage/HomePage.jsx';
import { Layout } from '../Layout.jsx';
import { Route, Routes } from 'react-router-dom';
import RestrictedRoute from '../RestrictedRoute.jsx';
import PrivateRoute from '../PrivateRoute.jsx';
import ContactsPage from '../../pages/ContactsPage/ContactsPage.jsx';
import { refreshUser } from '../../redux/auth/operations.js';
import { selectIsRefreshing } from '../../redux/auth/selectors.js';

function App() {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
