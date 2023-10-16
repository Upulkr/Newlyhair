
import {
  Card,
  CardBody,
  Typography,CardFooter,
  CardHeader,
  Tooltip

} from "@material-tailwind/react";

export function FeatureCard({ img, title, description }) {
  return (
    <Card className="w-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..." color="gray" variant="gradient" >
    <CardHeader floated={false} className=" rounded object-cover object-center">
      <img src={img} alt="profile-picture" className="rounded " />
    </CardHeader>
    <CardBody className="text-center text-justify">
      <Typography variant="h4" color="blue-gray" className="mb-2 " >
    {title}
      </Typography>
      <Typography color="black" className="font-medium" >
 {description}
      </Typography>
    </CardBody>
    <CardFooter className="flex justify-center gap-7 pt-2">
      {/* <Tooltip content="Like">
        <Typography
          as="a"
          href="#facebook"
          variant="lead"
          color="blue"
          textGradient
        >
          <i className="fab fa-facebook" />
        </Typography>
      </Tooltip>
      <Tooltip content="Follow">
        <Typography
          as="a"
          href="#twitter"
          variant="lead"
          color="light-blue"
          textGradient
        >
          <i className="fab fa-twitter" />
        </Typography>
      </Tooltip>
      <Tooltip content="Follow">
        <Typography
          as="a"
          href="#instagram"
          variant="lead"
          color="purple"
          textGradient
        >
          <i className="fab fa-instagram" />
        </Typography>
      </Tooltip> */}
    </CardFooter>
  </Card>
    // <>
    //   <div className="">
    //     <Card className=" bg-blue-gray-50 rounded-2xl shadow-lg m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">
    //       <CardBody className="px-8 text-center">
    //         <img
    //           variant="gradient"
             
    //           // color={color}
    //           src={img}
    //         />
    //         <Typography variant="h5" className="mb-2" color="blue-gray">
    //           {title}
    //         </Typography>
    //         <Typography className="font-normal text-blue-gray-600">
    //           {description}
    //         </Typography>
    //       </CardBody>
    //     </Card>
    //   </div>
    
    // </>
  );
}

// FeatureCard.defaultProps = {
//   color: "blue",
// };

// FeatureCard.propTypes = {
//   color: PropTypes.oneOf([
//     "blue-gray",
//     "gray",
//     "brown",
//     "deep-orange",
//     "orange",
//     "amber",
//     "yellow",
//     "lime",
//     "light-green",
//     "green",
//     "teal",
//     "cyan",
//     "light-blue",
//     "blue",
//     "indigo",
//     "deep-purple",
//     "purple",
//     "pink",
//     "red",
//   ]),
  
//   // title: PropTypes.string.isRequired,
//   // description: PropTypes.node.isRequired,
// };

FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;
