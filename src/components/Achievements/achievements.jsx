import React from 'react';
import "./achievements.css"
// import Points from './Points';
import me from "../../assets/cirtificates/me.jpg"
import iot from "../../assets/cirtificates/iot-1.png"
import ip from "../../assets/cirtificates/ip.jpg"
import js from "../../assets/cirtificates/js.jpg"
import mongo from "../../assets/cirtificates/mongo.jpg"
import soft from "../../assets/cirtificates/soft.jpg"
import proj from "../../assets/cirtificates/proj.jpg"
import python from "../../assets/cirtificates/python.jpg"
import r from "../../assets/cirtificates/r.jpg"
import r2 from "../../assets/cirtificates/r2.jpg"
import ne from "../../assets/cirtificates/NE.jpg"

// import Swiper core and required modules
// import  Pagination  from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Git from '../Github/Git';



export default function Achievements() {
  return (
    <>
      <section className="achievements container" id="achievements">
        <h2 className="section__title">Achievements</h2>

        <Swiper className="achievements__container grid"
          modules={[Autoplay,Pagination,Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          loop={true}
          grabCursor={true}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}

        >
          <SwiperSlide className="achievements__items" >
            <div className="thumb">
              <img src={me} alt='me' />
            </div>
          </SwiperSlide>
          <SwiperSlide className="achievements__items" >
            <div className="thumbiot">
              <img src={iot} alt='iot' />
            </div>
          </SwiperSlide>
          <SwiperSlide className="achievements__items" >
            <div className="thumb">
              <img src={ip} alt='me' />
            </div>
          </SwiperSlide>
          <SwiperSlide className="achievements__items" >
            <div className="thumb">
              <img src={js} alt='me' />
            </div>
          </SwiperSlide>
          <SwiperSlide className="achievements__items" >
            <div className="thumb">
              <img src={mongo} alt='me' />
            </div>
          </SwiperSlide>
          <SwiperSlide className="achievements__items" >
            <div className="thumb">
              <img src={ne} alt='me' />
            </div>
          </SwiperSlide>
          <SwiperSlide className="achievements__items" >
            <div className="thumb">
              <img src={soft} alt='me' />
            </div>
          </SwiperSlide>
          <SwiperSlide className="achievements__items" >
            <div className="thumb">
              <img src={proj} alt='me' />
            </div>
          </SwiperSlide>
          <SwiperSlide className="achievements__items" >
            <div className="thumb">
              <img src={python} alt='me' />
            </div>
          </SwiperSlide>
          <SwiperSlide className="achievements__items" >
            <div className="thumb">
              <img src={r} alt='me' />
            </div>
          </SwiperSlide>
          <SwiperSlide className="achievements__items" >
            <div className="thumb">
              <img src={r2} alt='me' />
            </div>
          </SwiperSlide>
        </Swiper>
        <Git />
      </section>
    </>
  )
}
