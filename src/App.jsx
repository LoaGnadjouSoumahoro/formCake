import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import './App.css';
import LocalPickup from './pages/localPickup/LocalPickup';
import OrderOnline from './pages/orderOnline/OrderOnline';
import RoutLayout from './pages/route/Rout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RoutLayout />,
    children: [
      { path: '/', element: <LocalPickup /> },
      { path: '/orderOnline', element: <OrderOnline /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
