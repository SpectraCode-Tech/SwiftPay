import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../assets/carousel.jpg";
import Slide2 from "../assets/carousel2.png";
import Slide3 from "../assets/carousel3.png";
import Navbar from "./Navbar";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    image: Slide1,
  },
  {
    image: Slide2}, {image: Slide3},
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goNext = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const goPrev = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className=" h-screen w-full">
   <Navbar />
    <div id="Home" className="relative overflow-hidden h-[85vh]">
      {/* Background images */}
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.image}
          alt={slide.headline}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-20"></div>

      {/* Current Slide Content */}
      <div className="absolute inset-0 flex items-center justify-center z-30">
        <div className="text-center text-white px-4 max-w-2xl">
          <p className="text-sm md:text-lg font-light tracking-widest uppercase mb-3">
            {slides[current].tagline}
          </p>
          <h1 className="text-2xl md:text-5xl font-bold mb-6 leading-tight">
            Bank Fast. Bank Smart
          </h1>
          <a
            href=""
            className=" hover:bg-red-700 transition text-white px-6 py-3 rounded-full text-sm md:text-lg font-semibold shadow-lg"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goPrev}
        className="absolute top-1/2 -translate-y-1/2 left-4 bg-black/40 hover:bg-black/60 p-3 rounded-full text-white transition z-40"
      >
        <ArrowLeft size={24} />
      </button>

      <button
        onClick={goNext}
        className="absolute top-1/2 -translate-y-1/2 right-4 bg-black/40 hover:bg-black/60 p-3 rounded-full text-white transition z-40"
      >
        <ArrowRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 w-full flex justify-center space-x-2 z-40">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              index === current ? "bg-red-600 scale-110" : "bg-white/40"
            }`}
          ></div>
        ))}
      </div>
    </div>
    </div>
  );
}