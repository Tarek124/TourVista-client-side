import { useEffect, useState } from "react";
import CountryCard from "../CountriesCard/CountriesCard";
import { Typewriter } from "react-simple-typewriter";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://y-one-taupe.vercel.app/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div className="my-8 md:px-4 2xl:px-0">
      <h1 className="text-2xl sm:text-3xl md:text-4xl md:px-0 px-4 font-semibold md:mt-4 py-4">
        Countrys
      </h1>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold md:px-0 px-4">
        <span>Now, its your turn to </span>
        <span className="text-indigo-500">
          <Typewriter
            words={["Explore", "Discover", "Experience"]}
            loop={Infinity}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
      <div className=" md:p-0">
        {countries.map((item, inx) => (
          <CountryCard key={item._id} item={item} inx={inx + 21} />
        ))}
      </div>
    </div>
  );
}
