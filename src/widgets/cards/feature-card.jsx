
import {
  Card,
  CardBody,
  Typography,CardFooter,
  CardHeader,
  Tooltip

} from "@material-tailwind/react";

export function FeatureCard({ img, title, description }) {
  return (
    <Card className=" sm:flex-col-1 md:flex-cols-2 lg:flex-cols-3 xl:flex-cols-4 2xl:flex-cols-6  w-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..." color="lime" variant="gradient" >
    <CardHeader floated={false} className=" rounded object-cover object-center">
      
    </CardHeader>
    <CardBody className=" text-justify">
    <img
              variant="gradient"
             
              // color={color}
              src={img}
            />
      <Typography variant="h4" color="blue-gray" className="mb-2 " >
    {title}
      </Typography>
      <Typography color="black" className="font-medium" >
 {description}
      </Typography>
    </CardBody>
    <CardFooter className="flex justify-center gap-7 pt-2">
     
    </CardFooter>
  </Card>
   
  );
}



FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;
