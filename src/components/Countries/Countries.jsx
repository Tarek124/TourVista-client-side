import { useEffect, useState } from "react";
import CountryCard from "../CountriesCard/CountriesCard";
import { Typewriter } from "react-simple-typewriter";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div className="my-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold md:mt-4 py-4">
        Countrys
      </h1>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
        <span>Now, its your turn to </span>
        <Typewriter
          words={["Explore", "Discover", "Experience"]}
          loop={Infinity}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <div className="p-4 md:p-0">
        {countries.map((item, inx) => (
          <CountryCard key={item._id} item={item} inx={inx + 21} />
        ))}
      </div>
    </div>
  );
}
