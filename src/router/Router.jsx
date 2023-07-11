import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

const Layout = lazy(() => import("../Layout"));
const Projects = lazy(() => import("../pages/Projects.jsx"));
const Information = lazy(() => import("../pages/Information"));
const Contact = lazy(() => import("../pages/Contact"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "/information",
        element: <Information />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;