import Home from "../pages/Home";
import type { Router } from "@remix-run/router";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Information } from "../pages/Information";

const Layout = lazy(() => import("../Layout.d"));
const Projects = lazy(() => import("../pages/Projects.jsx"));
const Contact = lazy(() => import("../pages/Contact"));

const router: Router = createBrowserRouter([
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
