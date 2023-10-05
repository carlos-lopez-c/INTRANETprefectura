
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import '../css/Nprincipal.css'


import "swiper/css";
import { carrusel } from "../utils/slider";
import styles from '../css/Carrusel.module.css'
import CarruselItem from "./CarruselItem";

function Carrusel() {

  return (
    <div className={styles.App}>
      <h1 className="Tnotic">Más Noticias</h1>

      <div className={styles.container}>
        <div className={styles['swiper-container']}>
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            pagination={{
              el: ".pagination",
              clickable: true,
            }}
            slidesPerView={4}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 25,
              },
              "@0.50": {
                slidesPerView: 1.25,
                spaceBetween: 25,
              },
              "@1.00": {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              "@1.25": {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              "@1.50": {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              "@1.75": {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {carrusel?.map((item) => (
              <SwiperSlide key={item.imagen}>
                <CarruselItem item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.pagination} />
      </div>
    </div>
  );
}

export default Carrusel;