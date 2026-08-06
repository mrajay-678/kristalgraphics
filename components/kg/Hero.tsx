"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

import marquee1 from "@/public/img/kg/marquee-1.png";
import marquee3 from "@/public/img/kg/marquee-3.png";
import marquee4 from "@/public/img/kg/marquee-4.png";

export default function Hero() {
  return (
    <div className="mxd-section mxd-hero-section padding-grid-pre-mtext">
      <div className="mxd-hero-03">
        <div className="mxd-hero-03__wrap loading-wrap">
          {/* top part */}
          <div className="mxd-hero-03__top !p-0">
            {/* marquee */}
            <div className="mxd-hero-03__marquee loading__item pt-[3%] pb-[0%]">
              {/* Marquee Start */}

              <Swiper
                modules={[Autoplay]}
                slidesPerView="auto"
                loop={true}
                speed={5000}
                allowTouchMove={false} // marquee usually doesn't need dragging
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                }}
                onTouchEnd={(swiper) => {
                  swiper.autoplay.start();
                }}
                onClick={(swiper) => {
                  swiper.autoplay.start();
                }}
                dir="rtl"
              >
                <SwiperSlide className="lg:!w-3/12 h-full">
                  <div className="justify-center marquee__item one-line">
                    <div className="hero-03-marquee__image">
                      <video
                        muted
                        loop
                        autoPlay
                        playsInline
                        preload="metadata"
                        disablePictureInPicture
                        controls={false}
                        src={"/video/kg/video1.mp4"}
                        className={"rounded-[800px]"}
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="lg:!w-3/12 h-full">
                  <div className="justify-center marquee__item one-line">
                    <div className="hero-03-marquee__image">
                      <Image
                        className="object-cover h-full mxd-move"
                        alt="Image"
                        src={marquee1}
                        priority
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="lg:!w-3/12 h-full">
                  <div className="justify-center marquee__item one-line">
                    <div className="hero-03-marquee__image">
                      <video
                        muted
                        loop
                        autoPlay
                        playsInline
                        preload="metadata"
                        disablePictureInPicture
                        controls={false}
                        src={"/video/kg/video2.mp4"}
                        className={"rounded-[800px]"}
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="lg:!w-3/12 h-full">
                  <div className="justify-center marquee__item one-line">
                    <div className="hero-03-marquee__image">
                      <Image
                        className="object-cover h-full mxd-move"
                        alt="Image"
                        src={marquee3}
                        priority
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="lg:!w-3/12 h-full">
                  <div className="justify-center marquee__item one-line">
                    <div className="hero-03-marquee__image">
                      <video
                        muted
                        loop
                        autoPlay
                        playsInline
                        preload="metadata"
                        disablePictureInPicture
                        controls={false}
                        src={"/video/kg/video3.mp4"}
                        className={"rounded-[800px]"}
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="lg:!w-3/12 h-full">
                  <div className="justify-center marquee__item one-line">
                    <div className="hero-03-marquee__image">
                      <Image
                        className="object-cover h-full p-10 mxd-move"
                        alt="Image"
                        src={marquee4}
                        priority
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              {/* Marquee End */}
            </div>
            {/* headline */}
            <div className="mxd-hero-03__headline ">
              <div className="md:mb-24 text-black hero-03-headline__title loading__item">
                <div className="!text-[8vh] font-heading leading-none hero-03-headline__svg-mobile">
                  Your <br /> Partner In
                  <br /> Print
                </div>
              </div>
            </div>
            <div>
              <div className="hero-03-headline__svg  text-[5.5vw] text-center !mb-0 pb-[3%]">
                Your Partner In Print
              </div>
            </div>
          </div>
          {/* bottom part */}
          <div className="mxd-hero-03__bottom">
            <div className="">
              {/* video divider */}
              <div className="mxd-container grid-container !px-0 md:px-[1.5rem]">
                <div className="mx-auto">
                  <video
                    muted
                    loop
                    autoPlay
                    playsInline
                    preload="none"
                    disablePictureInPicture
                    controls={false}
                    src={"/video/kg/home.mp4"}
                    className={"object-fit w-full"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
