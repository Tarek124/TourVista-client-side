import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Root from "../Root/Root";
import Login from "../components/Registation/Login";
import Register from "../components/Registation/Register";
import AddTouristsSpot from "../components/AddTouristsSpot/AddTouristsSpot";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import TouristsSpotDetails from "../components/TouristsSpotDetails/TouristsSpotDetails";
import CountriesDetails from "../components/CountriesDetails/CountriesDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllTouristsSpot from "../components/AllTouristsSpot/AllTouristsSpot";
import MyList from "../components/MyList/MyList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Root />,
        loader: () => fetch("http://localhost:5000/touristSpots"),
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/addTouristsSpot",
        element: (
          <PrivateRoute>
            <AddTouristsSpot />
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <TouristsSpotDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/touristSpots/${params.id}`),
      },
      {
        path: "/countries/:id",
        element: (
          <PrivateRoute>
            <CountriesDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/countries/${params.id}`),
      },
      {
        path: "/allTouristsSpot",
        element: <AllTouristsSpot />,
        loader: () => fetch("http://localhost:5000/touristSpots"),
      },
      {
        path: "/mylist",
        element: <MyList />,
        loader: () => fetch("http://localhost:5000/mylist"),
      },
    ],
  },
]);

export default router;
