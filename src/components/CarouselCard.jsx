import React from "react";

const CarouselCard = ({company, border = false, variant = 'default'}) => {

  const isSmall = variant === 'small';
  let background = company?.background ? `${company?.background}` : `#FFFFFF`;
  
  let tileStyling = `
    ${isSmall ? 'lg:h-32 h-24 w-full' : 'lg:h-[12rem] h-[10rem] lg:w-[9rem] w-[7rem] min-w-max'} 
    ${isSmall ? 'p-2' : 'p-4'} 
    rounded-small mb-4 flex items-center justify-center 
    ${border && !company?.background ? 'border-2 border-borderGray' : ''}
  `;

  return (
    <a href={company.url} target="_BLANK" className={`no-underline carousel-item text-center relative snap-start group flex flex-col ${isSmall ? 'w-full' : 'w-full'}`}>
      <div className={tileStyling} style={{backgroundColor: background}}>
        <img src={company.logo} alt={company.name} className={`${isSmall ? 'max-h-[90%] max-w-[90%] object-contain scale-110' : 'max-h-[85%] max-w-[85%] object-contain scale-125'}`} />
      </div>
      <div className="text-left">
        <p className={`mb-1 ${isSmall ? 'text-[1.125rem]' : 'text-[1.375rem]'} text-black font-[700] leading-[120%] tracking-tight flex items-center group-hover:text-primary transition-colors`}>
          {company.name}
          <span className="ml-[0.5rem] opacity-0 group-hover:opacity-100 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 15 15" fill="none">
              <path d="M1 2H13M13 2V14M13 2L1 14" stroke="currentColor" stroke-width="2.3"/>
            </svg>
          </span>
        </p>
        <p className={`${isSmall ? 'text-[0.875rem]' : 'text-[1rem] lg:text-[1.375rem]'} text-gray font-[500] leading-snug`}> {company.description}</p>
      </div>
    </a>
  )
}

export default CarouselCard;
