import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from '@/components/layout/RootLayout';
import { Home } from '@/pages/Home';
import { Dashboard } from '@/pages/Dashboard';
import { Plan } from '@/pages/Plan';
import { TripResult } from '@/pages/TripResult';
import { ErrorPage } from '@/pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "plan",
        element: <Plan />,
      },
      {
        path: "trip/:id",
        element: <TripResult />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
