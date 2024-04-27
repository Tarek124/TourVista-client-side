import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


function App() {

  return (
    <>
      <div className="max-w-[1400px] mx-auto">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
