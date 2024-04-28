import { useLoaderData } from "react-router-dom";
import AllTouristsSpotCard from "../AllTouristsSpotCard/AllTouristsSpotCard";
import { useState } from "react";

export default function AllTouristsSpot() {
  const data = useLoaderData();
  const [filter, setFilter] = useState("");
  const [userData, setUserData] = useState(data);

  const handleFilter = (e) => {
    setFilter(e.target.value);
    if (filter == "") {
      setUserData(data);
    } else if (filter == "Visitor Per Year") {
      const newData = data?.totaVisitorsPerYear?.sort((a, b) => b - a);
      setUserData(newData);
      console.log(newData);
    } else {
      const newData = data?.average_cost?.sort((a, b) => b - a);
      setUserData(newData);
      console.log(newData);
    }
  };

  return (
    <div className="md:mt-12">
      <select
        value={filter}
        onChange={handleFilter}
        className="select select-bordered w-full max-w-xs "
      >
        <option selected>Filter</option>
        <option value={"Average Cost"}>Average Cost</option>
        <option value={"Visitor Per Year"}>Visitor Per Year</option>
      </select>

      <div className="grid md:grid-cols-2 w-full gap-4">
        {userData?.map((item) => (
          <AllTouristsSpotCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
