import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import './App.css';
import LocalPickup from './pages/localPickup/LocalPickup';

const router = createBrowserRouter([{ path: '/', element: <LocalPickup /> }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
