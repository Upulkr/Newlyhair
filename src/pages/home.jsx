import React from "react";
import { Typography, IconButton } from "@material-tailwind/react";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData } from "@/data";
import HappyCustomers from "./HappyCustomers";
import Customers from "../data/HappyCustomersData";

export function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center relative">
        <img
          src="./img/hairbackground.jpg"
          alt="Background"
          className="absolute w-full h-full object-cover"
          style={{
            minHeight: "100vh",
            minWidth: "100%",
          }}
        />
        <div className="max-w-8xl container relative mx-auto mb-12">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <Typography variant="h1" color="white" className="mb-6 font-black">
              Unleash Your Beauty
            </Typography>
            <Typography variant="lead" color="white" className="mb-6">
              Welcome to hair and body Therapy Salon!
            </Typography>
          <div className="mt-24 pt-16"><h1 className="  font-black text-center text-white text-3xl">These services are for you</h1></div>
            

          </div>
        </div>
      </div>
     
      <section className="px-4 pb-20 pt-11 bg-blue-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ title, img, description }) => (
              <FeatureCard key={title} title={title} img={img} description={description} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 pt-4 bg-blue-gray-900">
        <div className="container mx-auto">
          <Typography variant="h1" color="white" className="text-center mb-8 font-black">
            Happy Customers
          </Typography>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {Customers.map(({ id, name, img, comment }) => (
              <HappyCustomers key={id} name={name} comment={comment} img={img} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 pt-4 bg-blue-gray-900">
        <div className="container mx-auto">
          <Typography variant="h1" color="white" className="text-center mb-8 font-black">
            Our Team
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
      </div>
    </>
  );
}

export default Home;
