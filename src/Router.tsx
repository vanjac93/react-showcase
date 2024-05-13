import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dashboard />} />
    </>,
  ),
);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
