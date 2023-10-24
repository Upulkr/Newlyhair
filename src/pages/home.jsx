import "@dotlottie/player-component";
import { teamData } from "../data/team-data";
import { TeamCard } from "../widgets/cards/team-card";
import { Footer } from "../widgets/layout/footer";

import { IconButton, Typography } from "@material-tailwind/react";
import ChatBox from "./ChatBox";
import Example from "./NewServices";
import Testomonials from "./Testomonials";

export function Home() {
  return (
    <div className="bg-white dark:bg-black">
      <div className="  relative flex min-h-screen flex-col   bg-center sm:bg-cover  bg-white dark:bg-black ">
      <img
            alt="nature"
            className="h-w-full object-contain mt-5 sm:max-h bg-white dark:bg-black "
            src="./img/hairbackground.jpg"
          />
        <div className="max-w-8xl container relative mx-auto bg-white dark:bg-black ">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center ">
            <Typography variant="h2" color="black" className="  font-black sm:font-normal">
              Unleash Your Beauty
            </Typography>
            <Typography variant="lead" color="white" className="">
              Welcome to hair and body Therapy Salon!
            </Typography>
            <div className="mt-24 pt-16">
              <h1 className="  text-center text-3xl font-black text-white ">
                These services are for you
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* <Video /> */}
      <section className="bg-white pb-20  sm:pt-1  bg-white dark:bg-black ">
        <Example />
      </section>

      <section className="m-7 px-4 pb-20 pt-4 bg-white dark:bg-black">
        <div className="container mx-auto">
          <Typography
            variant="h1"
            color="black"
            className="mb-8 text-center font-black  dark:text-white"
          >
            Our happy clients say about us
          </Typography>
        </div>
        <Testomonials />
        {/* <div >
          {Customers.map(({ comment }) => (
            <Testomonials comment={comment} />
          ))}
        </div> */}
      </section>

      <section className=" bg-white dark:bg-black px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <Typography
            variant="h1"
            color="Black"
            className="mb-8 text-center font-black  dark:text-white"
          >
            MEET THE EXPERTS
          </Typography>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 bg-white dark:bg-black">
            {teamData.map(({ img, name, position, socials, id }) => (
              <TeamCard
                key={id}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-lg fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>

      <div className="bg-blue-gray-900 bg-white dark:bg-black">
        <Footer />
        {/* <div>  <OpenHours  key={id}
            id={id}
             open={open}
             close= {close}
             day={day}/></div> */}
      </div>
      <div>
        <ChatBox />
      </div>
    </div>
  );
}

export default Home;
