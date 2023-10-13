import PropTypes from "prop-types";
import { Card, Avatar, Typography, } from "@material-tailwind/react";
import { useState } from "react";

export function TeamCard({ img, name, position, socials, id }) {
  const [activeCard, setActiveCard] = useState('2')

function handleClick(){
  setActiveCard(id);

//  ()=> setActiveCard(activeCard)
}
  return(
    <Card style={{ width: `${activeCard === id ? 20 : 32}rem` }} onClick={handleClick} color="transparent" shadow={false} className={`text-center border-2 border-black m-4 `}>
  
      <Avatar
        src={img}
        alt={name}
        size="xxl"
        className="h-full w-full shadow-lg shadow-gray-500/25"
      />
      <Typography variant="h5" color="blue-gray" className="mt-6 mb-1">
        {name}
      </Typography>
      {position && (
        <Typography variant="h5" color="black" className="mt-6 mb-1">
          {position}
        </Typography>
      )}
      {socials && <div className="mx-auto mt-5">{socials}</div>}
      <div className={`h-${activeCard === id ? 40 : 32} `} />
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
