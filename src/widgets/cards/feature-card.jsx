
import {
  Card,
  CardBody,
  Typography,CardFooter,
  CardHeader,
  Tooltip

} from "@material-tailwind/react";

export function FeatureCard({ img, title, description }) {
  return (
<div >

  <div >
 
    <img
      className="rounded-lg w-full"
      src={img}
    
    />

    {/* <p className="text-indigo-500 font-semibold text-base mt-2"></p>
  */}
    <h1 className="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate">
    {title}
    </h1>
 
    <div className="max-w-full">
      <p className="text-base font-medium tracking-wide text-gray-600 mt-1">
      {description}
      </p>
    </div>
  </div>
</div>


    
//     <Card className=" sm:flex-col-1 md:flex-cols-2 lg:flex-cols-3 xl:flex-cols-4 2xl:flex-cols-6  w-100 transition ease-in-out delay-150 " color="" variant="gradient" >
//     <CardHeader floated={false} className=" rounded object-cover object-center">
      
//     </CardHeader>
//     <CardBody className=" text-justify">
//     <img className=""
//               variant="gradient"
             
//               // color={color}
//               src={img}
//             />
//       <Typography variant="h4" color="blue-gray"  className='text-center' >
//     {title}
//       </Typography>
//       {/* <Typography color="black" className="font-medium" >
//  {description}
//       </Typography> */}
//     </CardBody>
//     <CardFooter className="flex justify-center gap-7 pt-2">
     
//     </CardFooter>
//   </Card>
   
  );
}



FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;
