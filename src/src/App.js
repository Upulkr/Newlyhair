import {
  createBrowserRouter,
  RouterProvider,
  useNavigation,
} from "react-router-dom";
import Home from "./Com/Home";
import Treatments from "./Com/Treatments";
import Contact from "./Com/Contact";
import Blog from "./Com/Blog";
import Stylists from "./Com/Stylists";
import AboutUS from "./Com/AboutUs";
import Header from "./Com/Header";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/treatments", element: <Treatments /> },
  { path: "/contact", element: <Contact /> },
  { path: "/blog", element: <Blog /> },
  { path: "/aboutUs", element: <AboutUS /> },
  { path: "/stylists", element: <Stylists /> },
]);
function App() {
  return (
    <>
      <Header /> <RouterProvider router={router} />;
    </>
  );
}

export default App;
