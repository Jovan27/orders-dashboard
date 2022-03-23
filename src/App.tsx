import { Navigate, Route, Routes } from 'react-router-dom';
import AuthenticatedRoute from './components/molecules/AuthenticatedRoute';
import UnauthenticatedRoute from './components/molecules/UnauthenticatedRoute';
import Header from './components/organisms/Header';
import Charts from './pages/Charts';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import OrdersTable from './pages/OrdersTable';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route path="*" element={<h1>404 | Page not found</h1>} />
          <Route path="/" element={<Navigate to="/sign-in" />} />
          <Route
            path="/sign-in"
            element={
              <UnauthenticatedRoute>
                <SignIn />
              </UnauthenticatedRoute>
            }
          />
          <Route
            path="/sign-up"
            element={
              <UnauthenticatedRoute>
                <SignUp />
              </UnauthenticatedRoute>
            }
          />
          <Route
            path="/table"
            element={
              <AuthenticatedRoute>
                <OrdersTable />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/charts"
            element={
              <AuthenticatedRoute>
                <Charts />
              </AuthenticatedRoute>
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
