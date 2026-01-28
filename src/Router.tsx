import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    // later:
    // { path: "/projects", element: <ProjectsIndexPage /> },
    // { path: "/projects/:slug", element: <ProjectDetailPage /> },
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
