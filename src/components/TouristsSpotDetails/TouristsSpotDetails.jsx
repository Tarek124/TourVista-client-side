import { Fade } from "react-awesome-reveal";
import { NavLink, useLoaderData } from "react-router-dom";

export default function TouristsSpotDetails() {
  const data = useLoaderData();
  console.log(data);
  return (
    <Fade cascade damping={0.1} delay={200}>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
          <div className="flex flex-col">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              {data.tourists_spot_name}
            </h1>
            <p className=" max-w-lg text-base ">{data.short_description}</p>
            <div className="flex gap-3 ">
              <p className="text-normal leading-4 font-medium my-1">
                {data.location},
              </p>
              <p className="text-normal leading-4 font-medium my-1">
                {data.country_Name}
              </p>
            </div>
            <p className="text-normal leading-4 font-light my-1">
              Seasson: {data.seassonValue}
            </p>
            <div className="flex gap-3 my-2">
              <p className="text-xl leading-4 font-medium my-1">
                <span>Average Cost: </span>
                <span className="font-semibold">
                  {data.average_cost} $ only
                </span>
              </p>
            </div>
            <p className="text-xl leading-4 font-medium my-1">
              <span>Visitor Per Year: </span>
              <span className="font-semibold">{data.totaVisitorsPerYear}</span>
            </p>
            <NavLink
              to={`/details/${data._id}`}
              type="button"
              className=" w-32 mt-8 bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
            >
              Book Now
            </NavLink>
          </div>
          <div className="inline-block h-full w-full max-w-[640px] overflow-hidden">
            <img src={data.photoURL} alt="" className="" />
          </div>
        </div>
      </div>
    </Fade>
  );
}
