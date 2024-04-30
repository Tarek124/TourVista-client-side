import { useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AppContext } from "../../context/AuthContext";

export default function UpdateTouristSpot() {
  const data = useLoaderData();
  const [seassonValue, setSeassonValue] = useState("");
  const [country, setCountry] = useState("");
  const [travelTime, setTravelTime] = useState("");
  const { user } = useContext(AppContext);
  const handleSeassonChange = (e) => {
    setSeassonValue(e.target.value);
  };
  const handleTravelTimeChange = (e) => {
    setTravelTime(e.target.value);
  };
  const handleCountry = (e) => {
    setCountry(e.target.value);
  };
  const handleAddTouristsSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const tourists_spot_name = form.tourists_spot_name.value;
    const location = form.location.value;
    const short_description = form.short_description.value;
    const average_cost = form.average_cost.value;
    const totaVisitorsPerYear = form.totaVisitorsPerYear.value;
    const photoURL = form.photoURL.value;
    //all details about the spot
    const newTouristsSpot = {
      tourists_spot_name,
      country,
      location,
      short_description,
      average_cost,
      totaVisitorsPerYear,
      photoURL,
      seassonValue,
      travelTime,
      email: user.email,
      name: user.displayName,
    };

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`https://y-one-taupe.vercel.app/touristSpots/${data._id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newTouristsSpot),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              Swal.fire("Saved!", "", "success");
            } else {
              Swal.fire("Please change somthing to update", "", "info");
            }
            console.log(data);
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleAddTouristsSpot}
        className="w-full flex flex-col justify-center rounded p-8 "
      >
        <h1 className="text-3xl my-6 text-center font-semibold">
          You can Update your Spot        </h1>
        <div className="md:flex gap-4">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-semibold">
                Tourists spot name
              </span>
            </div>
            <input
              type="text"
              placeholder="tourists_spot_name"
              className="input input-bordered w-full"
              required
              defaultValue={data?.tourists_spot_name}
              name="tourists_spot_name"
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-semibold">Country Name</span>
            </div>
            <select
              required
              value={data?.country}
              onChange={handleCountry}
              className="select select-bordered w-full"
            >
              <option>Country Name</option>
              <option value="Winter">Bangladesh</option>
              <option value="Summer">Thailand</option>
              <option value="Spring">Indonesia</option>
              <option value="Monsoon">Malaysia</option>
              <option value="Rainy">Vietnam</option>
              <option value="Monsoon">Cambodia</option>
            </select>
          </label>
        </div>
        <div className="md:flex gap-4">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-semibold">Location</span>
            </div>
            <input
              type="text"
              placeholder="location"
              className="input input-bordered w-full"
              required
              defaultValue={data?.location}
              name="location"
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-semibold">Description</span>
            </div>
            <textarea
              type="text"
              placeholder="short description"
              className="textarea textarea-bordered w-full"
              defaultValue={data?.short_description}
              required
              name="short_description"
            />
          </label>
        </div>
        <div className="md:flex gap-4">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-semibold">Average Cost</span>
            </div>
            <input
              type="text"
              placeholder="average_cost"
              className="input input-bordered w-full"
              defaultValue={data?.average_cost}
              required
              name="average_cost"
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-semibold">Seasonality</span>
            </div>
            <select
              required
              value={data?.seassonValue}
              onChange={handleSeassonChange}
              className="select select-bordered w-full"
            >
              <option>Seasonality</option>
              <option value="Winter">Winter</option>
              <option value="Summer">Summer</option>
              <option value="Spring">Spring</option>
              <option value="Monsoon">Monsoon</option>
              <option value="Rainy">Rainy</option>
            </select>
          </label>
        </div>
        <div className="md:flex gap-4">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-semibold">
                Total Visitors Per Year
              </span>
            </div>
            <input
              type="text"
              placeholder="totaVisitorsPerYear"
              className="input input-bordered w-full"
              defaultValue={data?.totaVisitorsPerYear}
              required
              name="totaVisitorsPerYear"
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-semibold">Travel Time</span>
            </div>
            <select
              required
              value={data?.travelTime}
              onChange={handleTravelTimeChange}
              className="select select-bordered w-full"
            >
              <option>Travel Time</option>
              <option value="3Days">3Days</option>
              <option value="7Days">7Days</option>
              <option value="15Days">15Days</option>
              <option value="1Month">1Month</option>
              <option value="3Month">3Month</option>
            </select>
          </label>
        </div>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text font-semibold">Photo URL</span>
          </div>
          <input
            type="text"
            placeholder="Photo URL"
            className="input input-bordered w-full"
            defaultValue={data?.photoURL}
            required
            name="photoURL"
          />
        </label>
        <div className="md:flex gap-4">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-semibold">Name</span>
            </div>
            <input
              type="text"
              placeholder="your name"
              className="input input-bordered w-full"
              name="name"
              disabled
              defaultValue={data?.name}
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-semibold">Email</span>
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full"
              name="email"
              disabled
              defaultValue={data?.email}
            />
          </label>
        </div>
        <button className="btn mt-5 btn-success text-white">Update</button>
      </form>
    </div>
  );
}
