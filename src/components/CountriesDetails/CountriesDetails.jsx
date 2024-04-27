import { NavLink, useLoaderData } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

export default function CountriesDetails() {
  const data = useLoaderData();
  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
      <div className="grid grid-cols-1 items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
        <div className="flex flex-col">
          <Fade cascade damping={0.1} delay={200}>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              {data?.country_name}
            </h1>
            <p className=" max-w-lg text-base mb-5">{data?.description}</p>
            <NavLink
              to={`/details/${data._id}`}
              type="button"
              className=" w-32 mt-8 bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
            >
              Book Now
            </NavLink>{" "}
          </Fade>
        </div>
        <img
          src={data?.image[0]}
          alt=""
          className="inline-block h-full w-full max-w-[640px]"
        />
      </div>
    </div>
  );
}
