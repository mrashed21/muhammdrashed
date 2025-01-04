import { createBrowserRouter } from "react-router-dom";
import ProjectDetails from "../Components/Projects/ProjectDetails";
import Main from "../Layout/Main/Main";
import Home from "../page/Home/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "project/:id", element: <ProjectDetails /> },
    ],
  },
]);

export default routes;
