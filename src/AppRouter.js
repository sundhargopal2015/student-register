import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import StudentsList from "./StudentLists";
import AddStudentForm from "./AddStudentForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "lists",
    element: <StudentsList />,
  },
  {
    path: "new",
    element: <AddStudentForm />,
  },
]);
