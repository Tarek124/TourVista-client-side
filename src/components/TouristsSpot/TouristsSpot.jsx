import { Typewriter } from "react-simple-typewriter";
import TouristsSpotCard from "../TouristsSpotCard/TouristsSpotCard";

export default function TouristsSpot({ data }) {
  return (
    <div className="md:mt-12 md:px-4 2xl:px-0">
      <div className="text-xl sm:text-3xl md:text-4xl font-semibold mt-7 md:mt-4 py-4 md:px-0 px-4">
        <Typewriter
          words={[
            "Adventure Awaits. Join Us",
            "Find Your Next Destination",
            "Embark on Epic Journeys. Discover Together.",
          ]}
          loop={Infinity}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={100}
          delaySpeed={1000}
        />
      </div>
      <div className="grid md:grid-cols-2 w-full gap-4">
        {data?.map((item) => (
          <TouristsSpotCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
