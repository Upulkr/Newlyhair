
// HappyCustomers.js
import { Customers } from '../data/HappyCustomersData';
import Newcus from './Newcus';
import {

  Typography,
 
} from "@material-tailwind/react";
function HappyCustomers() {
  return (
    <div className=" md:grid-cols-2 lg:grid-cols-3 m-16 justify-center flex flex-row flex-wrap gap-6 md:gap-x-6 xl:gap-x-12 ">
      
      {Customers.map((customer) => (
        <Newcus key={customer.id} name={customer.name} comment={customer.comment} img={customer.img} />
      ))}
    </div>
  );
}

export default HappyCustomers;
