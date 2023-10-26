import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';


export function FeatureCard({ img, title, description }) {
  return (
<div >

  <div className=" bg-white dark:bg-black" >
 
    <LazyLoadImage 
      className="rounded-lg w-full"
      src={img}
      alt="services"
    />

    {/* <p className="text-indigo-500 font-semibold text-base mt-2"></p>
  */}
    <h1 className=" dark:text-white  font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate">
    {title}
    </h1>
 
    <div className="max-w-full">
      <p className="text-base font-medium tracking-wide text-gray-600 mt-1  dark:text-white">
      {description}
      </p>
    </div>
  </div>
</div>


    

   
  );
}



FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;
