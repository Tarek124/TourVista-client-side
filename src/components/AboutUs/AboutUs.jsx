import Lottie from "lottie-react";
import groovyWalkAnimation from "./apSVaWGB5g.json";

export default function AboutUs() {
  return (
    <section className="">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="flex flex-col-reverse lg:items-center justify-start gap-8 sm:gap-20 lg:flex-row">
          <div className="lg:w-1/2">
            <Lottie
              animationData={groovyWalkAnimation}
              loop={true}
              autoplay={true}
            />
          </div>
          <div className="flex flex-col items-start lg:justify-center">
            <h1 className="text-xl md:text-5xl font-bold my-5">TourVista</h1>
            <p className="mb-6 max-w-2xl md:mb-12">
              Exploring new destinations is a journey of discovery, offering a
              blend of adventure, culture, and cuisine. Whether you're strolling
              through the bustling markets of Marrakech, enjoying the serene
              landscapes of the Swiss Alps, or savoring the flavors of Italy,
              travel provides an escape from the ordinary and a chance to
              broaden your horizons.
              <br />
              <br />
              Travelers are drawn to the unique experiences each location
              offers. Some are captivated by the historical sites of Rome, while
              others find peace in the tranquil beaches
            </p>
            <p className="font-bold">Abdullah Al Tarek</p>
            <p className="text-sm text-[#647084]">Junior Web Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
