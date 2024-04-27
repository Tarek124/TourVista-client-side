import { useLoaderData } from "react-router-dom";
import Slider from "../components/Slider/Slider";
import TouristsSpot from "../components/TouristsSpot/TouristsSpot";
import Countrys from "../components/Countrys/Countrys";

const Root = () => {
  const data = useLoaderData();
  return (
    <div>
      <Slider data={data} />
      <TouristsSpot data={data} />
      <Countrys />
    </div>
  );
};

export default Root;
