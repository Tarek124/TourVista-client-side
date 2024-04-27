import { useLoaderData } from "react-router-dom";
import Slider from "../components/Slider/Slider";
import TouristsSpot from "../components/TouristsSpot/TouristsSpot";
import Countries from "../components/Countries/Countries";
import { useContext } from "react";
import { AppContext } from "../context/AuthContext";
import { ClipLoader } from "react-spinners";

const Root = () => {
  const data = useLoaderData();
  const { loading } = useContext(AppContext);
  return loading ? (
    <div className="flex justify-center items-center h-[80vh]">
      <ClipLoader color="#36d7b7" />
    </div>
  ) : (
    <div>
      <Slider data={data} />
      <TouristsSpot data={data} />
      <Countries />
    </div>
  );
};

export default Root;
