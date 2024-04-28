import { useLoaderData } from "react-router-dom";
import AllTouristsSpotCard from "../AllTouristsSpotCard/AllTouristsSpotCard";
import { useState } from "react";

export default function AllTouristsSpot() {
  const data = useLoaderData();
  const [userData, setUserData] = useState(data);

  const handleSort = (name) => {
    const sorted = [...userData].sort((a, b) => b[name] - a[name]);
    setUserData(sorted);
  };

  return (
    <div className="md:mt-12">
      <details className="dropdown ">
        <summary className="m-1 btn btn-success text-white">Filter</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleSort("average_cost")}>
            <a>Average Cost</a>
          </li>
          <li onClick={() => handleSort("totaVisitorsPerYear")}>
            <a>Visitor Per Year</a>
          </li>
        </ul>
      </details>
      <div className="grid md:grid-cols-2 w-full gap-4">
        {userData?.map((item) => (
          <AllTouristsSpotCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
