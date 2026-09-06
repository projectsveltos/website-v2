import React, { useState, useRef, useEffect } from 'react';

const UseCasesCarousel = ({ useCases }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);
  const movement = 352;

  const movePrev = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  const moveNext = () => {
    if (useCases && currentIndex < useCases.length - 1) {
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
    <section className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-[#F4F7FA] pb-4 pt-4 mt-4 mb-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center mb-10 px-12">
          <h2 className="text-3xl font-bold text-[#0D1B2A]">Use Cases</h2>
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
              disabled={!useCases || currentIndex >= useCases.length - 1}
              className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-full disabled:opacity-20 shadow-sm hover:border-[#0f52b9] transition-all"
            >
              <svg width="10" height="16" viewBox="0 0 10 16"><path d="M1.5 1.5L8 8L1.5 14.5" stroke="black" strokeWidth="2.5" /></svg>
            </button>
          </div>
        </div>

        <div className="px-12 overflow-hidden">
          <div
            ref={carousel}
            className="flex flex-nowrap gap-8 overflow-x-auto no-scrollbar pb-10 pt-2"
          >
            {useCases?.map((uc, index) => (
              <div key={index} className="flex-none w-80">
                <div className="bg-white border-2 border-[#0f52b9] rounded-xl p-8 h-full flex flex-col gap-4 transition-all duration-300 hover:shadow-md">
                  <p className="text-[1.375rem] text-black font-[700] leading-[120%] tracking-tight m-0">{uc.title}</p>
                  <p className="text-[1rem] lg:text-[1.125rem] text-gray-500 font-[500] leading-snug m-0">{uc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesCarousel;