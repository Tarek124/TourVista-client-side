import { useState } from "react";
import Swal from "sweetalert2";

const AddTouristsSpot = () => {
  const [seassonValue, setSeassonValue] = useState("");
  const [travelTime, setTravelTime] = useState("");
  const handleSeassonChange = (e) => {
    setSeassonValue(e.target.value);
  };
  const handleTravelTimeChange = (e) => {
    setTravelTime(e.target.value);
  };
  const handleAddTouristsSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const tourists_spot_name = form.tourists_spot_name.value;
    const country_Name = form.country_Name.value;
    const location = form.location.value;
    const short_description = form.short_description.value;
    const average_cost = form.average_cost.value;
    const totaVisitorsPerYear = form.totaVisitorsPerYear.value;
    const photoURL = form.photoURL.value;
    //all details about the spot
    const newTouristsSpot = {
      tourists_spot_name,
      country_Name,
      location,
      short_description,
      average_cost,
      totaVisitorsPerYear,
      photoURL,
      seassonValue,
      travelTime,
    };
    fetch("http://localhost:5000/touristSpots", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTouristsSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
        form.reset();
        console.log(data)

      });
    console.log(newTouristsSpot);
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleAddTouristsSpot}
        className="w-full flex flex-col justify-center bg-[#F3F3F3] rounded p-8 shadow"
      >
        <h1 className="text-3xl text-center font-semibold">
          Add a TouristsSpot
        </h1>
        <div className="border-b border-[#c5c5c5] my-6 " />
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
              name="tourists_spot_name"
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-semibold">Country Name</span>
            </div>
            <input
              type="text"
              placeholder="country_Name"
              className="input input-bordered w-full"
              required
              name="country_Name"
            />
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
              name="location"
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-semibold">Description</span>
            </div>
            <input
              type="text"
              placeholder="short description"
              className="input input-bordered w-full"
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
              value={seassonValue}
              onChange={handleSeassonChange}
              className="select select-bordered w-full"
            >
              <option disabled selected>
                Seasonality
              </option>
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
              value={travelTime}
              onChange={handleTravelTimeChange}
              className="select select-bordered w-full"
            >
              <option disabled selected>
                Travel_time
              </option>
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
            />
          </label>
        </div>

        <button className="btn bg-[#1e2218] text-white mt-4 hover:text-black">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTouristsSpot;
