import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, About, SignIn, SignUp, Dashboard, Projects } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
