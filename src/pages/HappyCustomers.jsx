import {
 
  Typography,
  
} from "@material-tailwind/react";
import {Customers} from '../data/HappyCustomersData'
import HappyClient from './HappyClient'
function HappyCustomers() {
  return (
    <body className=" text-center py-8  bg-gray-400 text-white place-content-center">
     <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Happy Customers
              </Typography>
     <div className='flex  place-content-center'>
         
    {Customers.map(({img,name,comment,id})=><><HappyClient comment={comment} img={img} name={name} key={id}/></>)}
    
    </div></body>
  )
}

export default HappyCustomers
