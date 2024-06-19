import React from 'react'
import Slider from "react-slick";
import { object } from "../../data/dummy";

const Slide = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1390,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id='object' className="h-auto w-full lg:px-[72px] my-8 flex flex-col gap-y-2 py-16">
      <h1 className="font-bold text-[16px] lg:text-[20px] text-brown">
        SHOWCASING EXCELLENCE
      </h1>
      <h1 className="text-[24px] lg:text-[30px] font-bold">Fotography Object</h1>
      <Slider {...settings}>
        {object.map((item, i) => {
          return (
            <div key={i} className=" p-2">
              <div className="w-full  h-[200px] mb-3">
                <img src={item.image} alt="" className=" h-full w-full" />
              </div>
              <div className="">
                <h1 className="font-bold">{item.title}</h1>
                <p>{item.desc}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Slide
