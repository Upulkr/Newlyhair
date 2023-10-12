// import { home, } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
 
} from "@heroicons/react/24/solid";

import About from "./pages/About";
import Contact from './pages/Contact'
import Home from './pages/home'
import Services from './pages/Services'
export const routes = [
  {
    icon: HomeIcon,
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: "Services",
    path: "/services",
    element: <Services />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "About Us",
    path: "/about",
    element: <About/>,
  },
  {
    icon: UserPlusIcon,
    name: "Contact Us",
    path: "/contact",
    element: <Contact />,
  },
  // {
  //   icon: DocumentTextIcon,
  //   name: "Book Online",
  //   href: "",
  //   target: "_blank",
  //   element: "",
  // },
];

export default routes;
