import logo from '../../assets/image/therapist-woman.jpg';
import logo2 from '../../assets/image/therapist-men.jpg';
import React, { useRef } from 'react';

export const ThirdPage = () => {
  const carouselRef = useRef(null);
  const handleArrowClick = (direction) => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const currentScroll = carousel.scrollLeft;
      const slideWidth = carousel.clientWidth;
      const targetScroll = direction === 'prev' ? currentScroll - slideWidth : currentScroll + slideWidth;
      carousel.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }
  };
  return (
    <div
      id="carousel-section"
      className="carousel-section flex items-center flex-col px-6 h-screen bg-[#DBCAF4]">
      <div>
        <h1 className=" mb-10 text-2xl font-semibold">Lorem ipsum dolor sit amet.</h1>
      </div>
      <div className="carousel w-auto h-auto md:w-[60%] pb-4" ref={carouselRef}>
        <div id="slide1" className="carousel-item relative w-full max-md:flex-wrap lg:min-w-[70%] flex">
          <div className="lg:ml-20">
            <img src={logo} alt="/" className=" w-50 h-1/2 rounded-xl ml-20" />
          </div>
          <div className=" lg:my-20 lg:mr-28  " >
            <h3 className="font-bold text-xl">Un Titre</h3>
            <span className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, suscipit neque deserunt aliquid maiores ratione.
            </span>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-28 lg:top-1/2">
          <button onClick={() => handleArrowClick('prev')} className="btn btn-ghost animate-bounce">
          ❮
        </button>
        <button onClick={() => handleArrowClick('next')} className="btn btn-ghost animate-bounce">
          ❯
        </button>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full max-md:flex-wrap lg:min-w-[70%] flex space-x-0 ">
          <div className="lg:ml-20">
            <img src={logo2} alt="/" className="w-50 h-1/2 rounded-xl ml-20" />
          </div>
          <div className="lg:my-20 lg:mr-28 ">
            <h3 className="font-bold text-xl">Un Titre</h3>
            <span className="text-sm ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, suscipit neque deserunt aliquid maiores ratione.
            </span>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-28 lg:top-1/2">
            <button onClick={() => handleArrowClick('prev')} className="btn btn-ghost animate-bounce ">
             ❮
            </button>
            <button onClick={() => handleArrowClick('next')} className="btn btn-ghost animate-bounce">
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
