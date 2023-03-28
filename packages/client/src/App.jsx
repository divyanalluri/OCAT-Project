import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SiteWrapper } from './components';
import { DashboardBulletin } from './pages/Dashboard/DashboardBulletin';
import { NewAssessment } from './pages/Assessments/NewAssessment.jsx';
import { AssessmentList } from './pages/Assessments/AssessmentList';
import { Login } from './pages/User/Login';
import { Logout } from './pages/User/Logout';
import ProtectedRoute from './components/ProtectedRoute';

const isLoggedIn = Cookies.get(`isLoggedIn`);

const router = createBrowserRouter([
  {
    element: <DashboardBulletin />,
    path: `/`,
  },
  {
    element: <Login />,
    path: `/user/login`,
  },
  {
    element: <Logout />,
    path: `/user/logout`,
  },
  {
    element: <ProtectedRoute isLoggedIn={isLoggedIn}>
      <NewAssessment />
    </ProtectedRoute>,
    path: `/assessment/new`,
  },
  {
    element: <ProtectedRoute isLoggedIn={isLoggedIn}>
      <AssessmentList />
    </ProtectedRoute>,
    path: `/assessment/list`,
  },

]);

const App = () => <SiteWrapper>
  <RouterProvider router={router} />
</SiteWrapper>;

export default App;
