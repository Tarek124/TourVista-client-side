import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";

export default function Slider({ data }) {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {data?.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="md:h-[500px] overflow-hidden h-[200px] sm:h-[300px] flex items-center">
              <img className="w-full" src={item.photoURL} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
