import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import { NavLink } from "react-router-dom";

export default function CountryCard({ item, inx }) {
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomNumber = getRandomNumber(2000, 5000);

  return (
    <div
      data-aos={inx % 2 === 0 ? "fade-up-right" : "fade-up-left"}
      className={` md:flex ${
        inx % 2 === 0 ? "" : "flex-row-reverse gap-4"
      } justify-center items-center my-6 md:my-16  rounded md:p-0 p-4`}
    >
      <div className="md:w-1/2">
        <h1 className="text-5xl font-bold">{item.country_name}</h1>
        <p className="py-6 md:w-10/12 md:text-normal text-sm">
          {item.description}
        </p>
        <NavLink
          to={`countries/${item._id}`}
          className="btn btn-primary mb-6 md:mb-0"
        >
          View Details
        </NavLink>
      </div>
      <div className="md:w-1/2 h-[350px] overflow-hidden">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: randomNumber,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {item.image?.map((img, inx) => (
            <SwiperSlide key={inx}>
              <img src={img} className="w-full h-full" alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
