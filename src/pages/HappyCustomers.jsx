import {
 
  Typography,
  
} from "@material-tailwind/react";
import {Customers} from '../data/HappyCustomersData'
import HappyClient from './HappyClient'
function HappyCustomers() {
  return (
    <div className=" text-center py-8  bg-gray-400 text-white place-content-center">
     <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Happy Customers
              </Typography>
     <div className='flex  place-content-center'>
         
    {Customers.map((c)=><HappyClient comment={c.comment} img={c.img} name={c.name} key={c.id}/>)}
    
    </div></div>
  )
}

export default HappyCustomers
