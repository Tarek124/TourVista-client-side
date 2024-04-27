import { useLoaderData } from "react-router-dom";
import Slider from "../components/Slider/Slider";

const Root = () => {
  const data = useLoaderData();
  return (
    <div>
      <Slider data={data} />
    </div>
  );
};

export default Root;
