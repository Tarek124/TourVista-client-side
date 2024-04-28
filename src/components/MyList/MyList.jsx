import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AppContext } from "../../context/AuthContext";

export default function MyList() {
  const { user } = useContext(AppContext);
  const data = useLoaderData();

  const filterData = data.filter((x) => x?.email == user?.email);
  console.log(filterData);
  return <div></div>;
}
