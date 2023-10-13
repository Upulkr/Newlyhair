
import {
  Card,
  CardBody,
  Typography,

} from "@material-tailwind/react";

export function FeatureCard({ img, title, description }) {
  return (
    <>
      <div className="">
        <Card className=" bg-blue-gray-50 rounded-2xl shadow-lg m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">
          <CardBody className="px-8 text-center">
            <img
              variant="gradient"
              size="lg"
              // color={color}
              className="pointer-events-none mb-6 rounded-full"
              src={img}
            />
            <Typography variant="h5" className="mb-2" color="blue-gray">
              {title}
            </Typography>
            <Typography className="font-normal text-blue-gray-600">
              {description}
            </Typography>
          </CardBody>
        </Card>
      </div>
    
    </>
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
