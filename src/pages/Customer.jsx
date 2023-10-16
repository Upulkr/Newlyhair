import React from 'react';
import {
 
    Typography,
    
  } from "@material-tailwind/react";
function Customer({ comment, name, setActiveCard, img, activeCard, id }) {
    return (
        <div
            onClick={() => setActiveCard(id)}
            style={{ width: `${activeCard === id ? 20 : 32}rem` }}
            className="border-2 border-black m-4  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
        >
           
            <img src={img} alt={name} />
            <div className="h-18 text-center">{comment}</div> {/* Is comment supposed to be used here? */}
            <div className="h-8 text-center">{name}</div>
            {/* <div className={`h-${activeCard === id ? 40 : 32} bg-red`} /> */}
            <div className="h-12" />
        </div>
    );
}

export default Customer;
