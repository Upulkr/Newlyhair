import { teamData } from "../data/team-data";
import { TeamCard } from "../widgets/cards/team-card";
import { Footer } from "../widgets/layout/footer";
import "@dotlottie/player-component";

import ChatBox from "./ChatBox";
import Example from "./NewServices";
import Testomonials from "./Testomonials";
import Video from "./Video";
import { IconButton, Typography } from "@material-tailwind/react";
import { useState } from "react";
import Customers from "@/data/HappyCustomersData";

export function Home() {
  return (
    <>
      <div className="mt- relative flex min-h-screen flex-col items-center justify-center bg-center">
        <img
          src="./img/hairbackground.jpg"
          alt="Background"
          className="absolute h-screen  object-center bg-transparent bg-repeat sm:object-cover  min-w-full"
          // style={{
          //   minHeight: "100%",
          //   minWidth: "100%",
          // }}
        />
        <div className="max-w-8xl container relative mx-auto mb-12">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center">
            <Typography variant="h1" color="white" className="mb-6 font-black">
              Unleash Your Beauty
            </Typography>
            <Typography variant="lead" color="white" className="mb-6">
              Welcome to hair and body Therapy Salon!
            </Typography>
            <div className="mt-24 pt-16">
              <h1 className="  text-center text-3xl font-black text-white">
                These services are for you
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* <Video /> */}
      <section className="bg-white px-4 pb-20 pt-11">
        <Example />
      </section>

      <section className="m-7 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <Typography
            variant="h1"
            color="black"
            className="mb-8 text-center font-black"
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

      <section className="bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <Typography
            variant="h1"
            color="Black"
            className="mb-8 text-center font-black"
          >
            MEET THE EXPERTS
          </Typography>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
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

      <div className="bg-blue-gray-900">
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
    </>
  );
}

export default Home;
