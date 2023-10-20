import Customer from './Customer'
import Customers from '../data/HappyCustomersData'
import { useState } from "react"
import {
 
    Typography,
    
  } from "@material-tailwind/react";
function Customerss() {
const [activeCard,setActiveCard]=useState('')

    return (
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
             
            {Customers.map((c)=><Customer
          comment={c.comment} img={c.img} name={c.name} id={c.id}key={c.id} activeCard={activeCard}setActiveCard={setActiveCard}
            />)}
        </div>
    )
}

export default Customerss
