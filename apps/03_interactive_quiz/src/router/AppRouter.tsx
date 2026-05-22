import { createBrowserRouter } from "react-router";
import Home from "../components/Home";
import Question from "../components/Question";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/question/:id",
    element: <Question />,
  },
]);
