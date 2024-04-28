import { Typewriter } from "react-simple-typewriter";
import TouristsSpotCard from "../TouristsSpotCard/TouristsSpotCard";

export default function TouristsSpot({ data }) {
  return (
    <div className="md:mt-12">
      <div className="text-2xl sm:text-3xl md:text-4xl font-semibold md:mt-4 py-4">
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
