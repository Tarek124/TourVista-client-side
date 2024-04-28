import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

AOS.init();
export default function AllTouristsSpotCard({ item }) {
  const description =
    item?.short_description.length > 200
      ? item.short_description.slice(0, 200)
      : item?.short_description;
  return (
    <main className="py-6 px-4 sm:p-6 md:py-8 md:px-0" data-aos="zoom-in-up">
      <div className="flex gap-2 flex-col-reverse">
        <div className="rounded-lg">
          <h1 className="mt-1 text-lg font-semibold md:text-2xl ">
            {item?.tourists_spot_name}
          </h1>
          <p className="text-sm leading-4 font-medium text-white mb-4 mt-2  dark:sm:text-slate-400">
            {item.location}
          </p>

          <div className="mt-3 text-sm leading-6 dark:text-slate-400">
            {description}
            <h1 className="mt-2 text-lg font-semibold md:text-2xl text-black">
              {item?.price}
            </h1>
            <div className="py-2">
              <NavLink
                to={`/details/${item._id}`}
                type="button"
                className="shadow-lg bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
              >
                View Details
              </NavLink>
            </div>
          </div>
        </div>
        <div>
          <img
            src={item?.photoURL}
            alt=""
            className="w-full rounded-lg shadow-xl"
            loading="lazy"
          />
        </div>
      </div>
    </main>
  );
}
