import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AuthContext";
import { ClipLoader } from "react-spinners";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

export default function MyList() {
  const [myData, setMyData] = useState([]);
  const { user } = useContext(AppContext);
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    fetch(`https://y-one-taupe.vercel.app/myData/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyData(data))
      .catch((err) => console.log(err));
  }, [user, update]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "This spot has been deleted.",
          icon: "success",
        });
        fetch(`https://y-one-taupe.vercel.app/touristSpots/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            setUpdate(!update);
            console.log(data);
          })
          .catch((err) => {
            console.error("Error during deletion:", err);
            Swal.fire({
              title: "Error",
              text: "Could not delete this spot.",
              icon: "error",
            });
          });
      }
    });
  };

  console.log(myData);
  return user ? (
    <div className=" md:px-4 2xl:px-0">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold md:mt-4 py-4 px-4 ">
        My List
      </h1>
      <div className="">
        {myData &&
          myData.map((spots) => (
            <div key={spots._id}>
              <Fade cascade damping={0.1} delay={200}>
                <div className="my-4 md:my-8 card shadow-lg hover:shadow-2xl transition-shadow p-4">
                  <div />
                  <div>
                    <h2 className="text-2xl font-semibold font-serif mb-4">
                      {spots.tourists_spot_name}
                    </h2>
                    <div>
                      <p>{spots.short_description}</p>
                      <div className="flex flex-wrap my-1 gap-4">
                        <p>Seasson: {spots.seassonValue}</p>
                        <p>Average Cost: {spots.average_cost}</p>
                      </div>
                      <p className="mb-3">Travel Time : {spots.travelTime}</p>
                    </div>
                  </div>
                  <div className="my-2">
                    <NavLink
                      to={`/update/${spots._id}`}
                      className="btn btn-success text-white"
                    >
                      Edit
                    </NavLink>
                    <button
                      className="btn bg-red-500 text-white mx-2"
                      onClick={() => handleDelete(spots._id)}
                    >
                      Detete
                    </button>
                  </div>
                </div>
              </Fade>
            </div>
          ))}
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center h-[80vh]">
      <ClipLoader color="#36d7b7" />
    </div>
  );
}
