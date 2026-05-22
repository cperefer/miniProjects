import { RouterProvider } from "react-router";
import { appRouter } from "../router/AppRouter";

export default function QuizApp() {
  return (
    <div className="bg-white rounded-xl">
      <div>quizApp</div>
      <RouterProvider router={appRouter} />
    </div>
  );
}
