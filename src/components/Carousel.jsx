import React, { useState, useRef, useEffect } from 'react';
import CarouselCard from './CarouselCard.jsx';

const Carousel = ({ companies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);
  const movement = 352;

  const movePrev = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  const moveNext = () => {
    if (companies && currentIndex < companies.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  useEffect(() => {
    if (carousel.current) {
      carousel.current.scrollTo({
        left: currentIndex * movement,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    /* THE BACKGROUND FIX:
       1. bg-[#F4F7FA] is a distinct light blue-gray.
       2. w-screen + negative margins forces the background to hit both screen edges.
    */
    <section className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-[#F4F7FA] py-20 my-16">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-10 px-12">
          <h2 className="text-3xl font-bold text-[#0D1B2A]">Trusted Partners</h2>
          <div className="flex gap-4">
            <button
              onClick={movePrev}
              disabled={currentIndex === 0}
              className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-full disabled:opacity-20 shadow-sm hover:border-[#0f52b9] transition-all"
            >
              <svg width="10" height="16" viewBox="0 0 10 16" className="rotate-180"><path d="M1.5 1.5L8 8L1.5 14.5" stroke="black" strokeWidth="2.5" /></svg>
            </button>
            <button
              onClick={moveNext}
              disabled={!companies || currentIndex >= companies.length - 1}
              className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-full disabled:opacity-20 shadow-sm hover:border-[#0f52b9] transition-all"
            >
              <svg width="10" height="16" viewBox="0 0 10 16"><path d="M1.5 1.5L8 8L1.5 14.5" stroke="black" strokeWidth="2.5" /></svg>
            </button>
          </div>
        </div>

        {/* Viewport */}
        <div className="px-12 overflow-hidden">
          <div
            ref={carousel}
            className="flex flex-nowrap gap-8 overflow-x-auto no-scrollbar pb-10 pt-2"
          >
            {companies?.map((company, index) => (
              <div key={index} className="flex-none w-80">
                <CarouselCard company={company} border={true} variant="default" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;