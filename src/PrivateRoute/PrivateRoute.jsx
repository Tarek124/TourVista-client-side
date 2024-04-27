import { useContext } from "react";
import { AppContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AppContext);
  const location = useLocation();

  if (user) {
    return children;
  } else {
    return loading ? (
      <div className="flex justify-center items-center h-[80vh]">
        <ClipLoader color="#36d7b7" />
      </div>
    ) : (
      <Navigate state={location.pathname} to="/login" />
    );
  }
};

export default PrivateRoute;
