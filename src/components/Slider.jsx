import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Card from "../assets/img/Card.png";

const Slider = () => {
    const pagination = {
        clickable: true,
        renderBullet: function () {
            return `<span class="swiper-pagination-bullet"></span>`;
        },
    };
    return (
        <div id="about" className="relative z-20 bg-white w-full py-[80px]">
            <div className="flex flex-col items-center">
                <h2 className="text-center mb-[30px]">About text</h2>
                <div className="text-center w-[300px] sm:w-[500px] mb-[60px]">
                    Nisi ullamco tempor tempor nulla labore ad labore sit eu
                    duis. Ut et esse cupidatat consequat.
                </div>
            </div>

            <>
                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        420: {
                            slidesPerView: 1.5,
                        },
                        640: {
                            slidesPerView: 1.5,
                        },
                        768: {
                            slidesPerView: 2.5,
                        },
                        1024: {
                            slidesPerView: 3.5,
                        },

                        1440: {
                            slidesPerView: 4.5,
                        },
                    }}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    pagination={pagination}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide className="">
                        <div className="bg-yellow-400 px-[20px] py-[30px] card text-left">
                            <div className="flex gap-[20px] items-center">
                                <img
                                    className="w-[90px] h-[73px]"
                                    src={Card}
                                    alt="Card"
                                />
                                <p className="text-[20px] font-bold">
                                    Nisi ullamco tempor tempor nulla.
                                </p>
                            </div>
                            <div className="mt-[15px]">
                                Nisi ullamco tempor tempor nulla labore ad
                                labore sit eu duis.{" "}
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <div className="bg-red-500 px-[20px] py-[30px] card text-white text-left">
                            <div className="flex gap-[20px] items-center">
                                <img
                                    className="w-[90px] h-[73px]"
                                    src={Card}
                                    alt="Card"
                                />
                                <p className="text-[20px] font-bold">
                                    Nisi ullamco tempor tempor nulla.
                                </p>
                            </div>
                            <div className="mt-[15px]">
                                Nisi ullamco tempor tempor nulla labore ad
                                labore sit eu duis.{" "}
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <div className="bg-red-200 px-[20px] py-[30px] card text-left">
                            <div className="flex gap-[20px] items-center">
                                <img
                                    className="w-[90px] h-[73px]"
                                    src={Card}
                                    alt="Card"
                                />
                                <p className="text-[20px] font-bold">
                                    Nisi ullamco tempor tempor nulla.
                                </p>
                            </div>
                            <div className="mt-[15px]">
                                Nisi ullamco tempor tempor nulla labore ad
                                labore sit eu duis.{" "}
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <div className="bg-yellow-400 px-[20px] py-[30px] card text-left">
                            <div className="flex gap-[20px] items-center">
                                <img
                                    className="w-[90px] h-[73px]"
                                    src={Card}
                                    alt="Card"
                                />
                                <p className="text-[20px] font-bold">
                                    Nisi ullamco tempor tempor nulla.
                                </p>
                            </div>
                            <div className="mt-[15px]">
                                Nisi ullamco tempor tempor nulla labore ad
                                labore sit eu duis.{" "}
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <div className="bg-red-500 px-[20px] py-[30px] card text-white text-left">
                            <div className="flex gap-[20px] items-center">
                                <img
                                    className="w-[90px] h-[73px]"
                                    src={Card}
                                    alt="Card"
                                />
                                <p className="text-[20px] font-bold">
                                    Nisi ullamco tempor tempor nulla.
                                </p>
                            </div>
                            <div className="mt-[15px]">
                                Nisi ullamco tempor tempor nulla labore ad
                                labore sit eu duis.{" "}
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <div className="bg-red-200 px-[20px] py-[30px] card text-left">
                            <div className="flex gap-[20px] items-center">
                                <img
                                    className="w-[90px] h-[73px]"
                                    src={Card}
                                    alt="Card"
                                />
                                <p className="text-[20px] font-bold">
                                    Nisi ullamco tempor tempor nulla.
                                </p>
                            </div>
                            <div className="mt-[15px]">
                                Nisi ullamco tempor tempor nulla labore ad
                                labore sit eu duis.{" "}
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
        </div>
    );
};

export default Slider;
