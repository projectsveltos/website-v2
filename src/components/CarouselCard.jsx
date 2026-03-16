import React from "react";

const CarouselCard = ({company, border = false, variant = 'default'}) => {

  const isSmall = variant === 'small';
  // Sveltos Blue
  const sveltosBlue = '#0f52b9';

  // Use company background if it exists, otherwise white
  let background = company?.background ? company.background : "#FFFFFF";

  let tileStyling = `
    ${isSmall ? 'h-32 md:h-40 w-full' : 'lg:h-[12rem] h-[10rem] w-full'}
    ${isSmall ? 'p-8' : 'p-10'}
    rounded-xl mb-4 flex items-center justify-center transition-all duration-300
    ${border ? 'border-2' : 'border-0'}
  `;

  return (
    <a
      href={company.url}
      target="_BLANK"
      rel="noreferrer"
      className="no-underline group flex flex-col w-full"
    >
      <div
        className={tileStyling}
        style={{
          backgroundColor: background,
          // This ensures the border is always Sveltos Blue if border is true
          borderColor: border ? sveltosBlue : 'transparent'
        }}
      >
        <img
          src={company.logo}
          alt={company.name}
          /* FIX FOR CLASTIX:
             Removed scale-125/110. Using max-h/max-w [70%] with p-8
             ensures wide logos have breathing room and don't look "wider"
          */
          className="max-h-[75%] max-w-[75%] object-contain transition-transform group-hover:scale-105"
        />
      </div>

      <div className="text-left px-1">
        <p className={`mb-1 ${isSmall ? 'text-[1.125rem]' : 'text-[1.375rem]'} text-black font-[700] leading-[120%] tracking-tight flex items-center group-hover:text-[#0f52b9] transition-colors`}>
          {company.name}
          <span className="ml-[0.5rem] opacity-0 group-hover:opacity-100 transition-all transform -translate-x-1 group-hover:translate-x-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 15 15" fill="none">
              <path d="M1 2H13M13 2V14M13 2L1 14" stroke="currentColor" stroke-width="2.3"/>
            </svg>
          </span>
        </p>
        <p className={`${isSmall ? 'text-[0.875rem]' : 'text-[1rem] lg:text-[1.125rem]'} text-gray-500 font-[500] leading-snug line-clamp-2`}>
          {company.description}
        </p>
      </div>
    </a>
  );
}

export default CarouselCard;
