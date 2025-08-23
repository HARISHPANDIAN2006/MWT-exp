import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const PopularServices = () => {
  const services = [
    { title: "Vibe Coding", alt: "Vibe Coding" },
    { title: "Web Development", alt: "Web Dev" },
    { title: "Video Editing", alt: "Video Editing" },
    { title: "App Development", alt: "App Dev" },
  ];

  return (
    <section className="px-10 py-8 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Popular services</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={3}
        className="mySwiper"
      >
        {services.map((service, index) => (
          <SwiperSlide
            key={index}
            className="bg-green-500 hover:bg-green-300 hover:text-black text-white rounded-2xl p-4 w-60 shadow-md flex flex-col items-center justify-between"
          >
            <h3 className="font-bold text-lg mb-3">{service.title}</h3>
            <img
              src="https://picsum.photos/400/250"
              className="rounded-xl"
              alt={service.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    
  );
};

export default PopularServices;