
import {
  Card,
  CardBody,
  Typography,

} from "@material-tailwind/react";

export function FeatureCard({ img, title, description }) {
  return (
    <>
      <>
        <Card className="rounded-2xl shadow-lg shadow-gray-500/10">
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
      </>
    
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
