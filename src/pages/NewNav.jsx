import routes from "@/routes";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import {
  IconButton,
  MobileNav,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
// import Toggle from "./Toggle";

export default function NewNav() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="  mt-3  flex flex-col  bg-white text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center gap-1 ">
      {routes.map(({ name, icon, path }) => (
        <Typography
          key={name}
          as="li"
          variant="3xl"
          color="8xl"
          className=" font-extrabold capitalize text-black transition delay-150  ease-in-out dark:text-white"
        >
          <Link
            to={path}
            className=" flex items-center gap-1 p-1 font-normal dark:text-white"
          >
            {icon &&
              React.createElement(icon, {
                className:
                  "  dark:text-white  w-[18px] h-[18px] opacity-75 mr-1",
              })}
            {name}
          </Link>
        </Typography>
      ))}
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl  bg-white shadow-none mt-2 ">
      <div className=" mx-auto flex items-center justify-between text-blue-gray-900">
        <Link to="/">
          <Typography className="cursor-pointer font-bold  dark:text-white">
            Saloon Toronto
          </Typography>
        </Link>
        <div className="hidden lg:block">
          {navList}
        </div>
        {/* <Toggle/> */}
        <div className="hidden gap-2 lg:flex"></div>
        <IconButton
          variant="text"
          size="sm"
          color="white"
          className="ml-auto bg-white  text-inherit  hover:bg-transparent focus:bg-transparent active:bg-transparent  dark:text-white lg:hidden"
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
        className=" rounded-xl   bg-white px-4 pb-4 pt-2 text-blue-gray-900   dark:text-white"
        open={openNav}
      >
        <div className="  mx-auto dark:text-white ">
          {navList}

          {/* <Toggle/> */}
        </div>
      </MobileNav>
    </Navbar>
  );
}
