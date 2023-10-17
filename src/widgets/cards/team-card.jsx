import PropTypes from "prop-types";
import { Card, Avatar, Typography,CardHeader, CardBody ,CardFooter} from "@material-tailwind/react";
import { useState } from "react";

export function TeamCard({ img, name, position, socials, id }) {
  const [activeCard, setActiveCard] = useState('2')

function handleClick(){
  setActiveCard(id);

//  ()=> setActiveCard(activeCard)
}
  return(
    <Card className=" sm:flex-col-1 md:flex-cols-2 lg:flex-cols-3 xl:flex-cols-4 2xl:flex-cols-6  w-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..." color="yellow" variant="gradient" >
    <CardHeader floated={false} className=" rounded object-cover object-center">
      
    </CardHeader>
    <CardBody className="text-center text-justify">
    <img
              variant="gradient"
             
              // color={color}
              src={img}
            />
      <Typography variant="h4" color="blue-gray" className="mb-2 " >
    {name}
      </Typography>
      <Typography color="black" className="font-medium" >
 {position}
      </Typography>
    </CardBody>
    <CardFooter className="flex justify-center gap-7 pt-2">
     
    </CardFooter>
  </Card>
  );
}

TeamCard.defaultProps = {
  position: "",
  socials: null,
};

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  socials: PropTypes.node,
};

TeamCard.displayName = "/src/widgets/layout/team-card.jsx";

export default TeamCard;
