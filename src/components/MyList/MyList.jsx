import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AppContext } from "../../context/AuthContext";

export default function MyList() {
  const { user } = useContext(AppContext);
  const data = useLoaderData();

  const filterData = data.filter((x) => x?.email === user?.email);
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold md:mt-4 py-4 ">
        My List
      </h1>
      <div className="flex flex-wrap gap-4 justify-start">
        {filterData.map((spots) => (
          <div key={spots._id} className={``}>
            <div>
              <div />
              <div>
                <div>{spots.tourists_spot_name}</div>
                <div>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </div>
              </div>
              <div>
                <button size="small">Share</button>
                <button size="small">Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
