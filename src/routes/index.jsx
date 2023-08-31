import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ApplicantDetail from "../components/ApplicantDetail";
import BioForm from "../components/BioForm";
import Profile from "../components/Profile";
import About from "../pages/About";
import ApplicantList from "../pages/ApplicantList";
import CareerJob from "../pages/CareerJob";
import Galleries from "../pages/Galleries";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Page404 from "../pages/Page404";
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
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/galleries",
        element: <Galleries />,
      },
      {
        path: "/applicantList",
        element: <ApplicantList />,
      },
      {
        path: "/applicantDetail",
        element: <ApplicantDetail />,
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
  {
    path: "/applicantList",
    element: <ApplicantList />,
  },
  {
    path: "/applicantDetail",
    element: <ApplicantDetail />,
  },
  {
    path: "/careerJob",
    element: <CareerJob />,
  },
  {
    path: "/bioForm",
    element: <BioForm />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

export default routes;
