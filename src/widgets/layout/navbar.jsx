import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function Navbar({ routes }) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-7 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">
      {routes.map(({ name,icon,path,  }) => (
        <Typography
          key={name}
          as="li"
          variant="small"
          color="inherit"
          className="capitalize transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 ..."
          
        >
{/* 
          <Link
            to={path}
            target={element}
            className="flex items-center gap-1 p-1 font-normal"
          /> */}
          
            {/* <Link
              href={path}
              target={element}
              className="flex items-center gap-1 p-1 font-normal"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </Link> */}
           
            <Link
              to={path}
            
              className="flex items-center gap-1 p-1 font-normal"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </Link>
          
        </Typography>
      ))}
    </ul>
  );

  return (
    <MTNavbar color="transparent" className="p-3 mb-11" >
      <div className="  container mx-auto flex items-center justify-between text-white">
        <Link to="/">
          <Typography className="ml-2 mr-4 cursor-pointer py-1.5 font-bold">
            Saloon Noya
          </Typography>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden gap-2 lg:flex"></div>
        <IconButton
          variant="text"
          size="sm"
          color="white"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <MobileNav
        className="rounded-xl bg-white px-4 pb-4 pt-2 text-blue-gray-900"
        open={openNav}
      >
        <div className="container mx-auto">
          {navList}

          {/* {React.cloneElement(action, {
            className: "w-full block",
          })} */}
        </div>
      </MobileNav>
    </MTNavbar>
  );
}

// Navbar.defaultProps = {
//   brandName: "Saloon Noya",
//   action: <Link to={"/"}></Link>,
// };

// Navbar.propTypes = {
//   brandName: PropTypes.string,
//   routes: PropTypes.arrayOf(PropTypes.object).isRequired,
//   action: PropTypes.node,
// };

// Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
