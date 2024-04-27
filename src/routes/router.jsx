import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Root from "../Root/Root";
import Login from "../components/Registation/Login";
import Register from "../components/Registation/Register";
import AddTouristsSpot from "../components/AddTouristsSpot/AddTouristsSpot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Root />,
        loader: () => fetch("http://localhost:5000/touristSpots"),
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/addTouristsSpot", element: <AddTouristsSpot /> },
    ],
  },
]);

export default router;
