import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Services from "../pages/Services";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default routes;
