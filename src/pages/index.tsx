import Layout from "_shared/components/layout";
import Home from "./home";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
    element: <Layout />,
    path: "/",
  },
]);


const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
