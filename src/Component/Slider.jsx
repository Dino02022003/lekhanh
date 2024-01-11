import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default () => {
  return (
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      <SwiperSlide>
        <img src="/Shared/slider/Slide4.png" style={{ width: "100%" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/Shared/slider/Slide4.png" style={{ width: "100%" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/Shared/slider/Slide4.png" style={{ width: "100%" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/Shared/slider/Slide4.png" style={{ width: "100%" }} />
      </SwiperSlide>
    </Swiper>
  );
};