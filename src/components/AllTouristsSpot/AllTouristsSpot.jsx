import { useLoaderData } from "react-router-dom";
import AllTouristsSpotCard from "../AllTouristsSpotCard/AllTouristsSpotCard";

export default function AllTouristsSpot() {
  const data = useLoaderData();
  return (
    <div className="md:mt-12">
      <select className="select select-bordered w-full max-w-xs ">
        <option disabled selected>
          Filter
        </option>
        <option>Average Cost</option>
        <option>Visitor Per Year</option>
      </select>

      <div className="grid md:grid-cols-2 w-full gap-4">
        {data?.map((item) => (
          <AllTouristsSpotCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
