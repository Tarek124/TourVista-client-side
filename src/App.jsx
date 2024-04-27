import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AuthContext";

function App() {
  const { theme } = useContext(AppContext);

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <>
      <div className="max-w-5xl mx-auto">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
