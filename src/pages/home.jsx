import { teamData } from "@/data";
import { TeamCard } from "@/widgets/cards";
import { Footer } from "@/widgets/layout";
import { IconButton, Typography } from "@material-tailwind/react";
import Customers from "../data/HappyCustomersData";
import Example from './NewServices';
import Testomonials from "./Testomonials";
import OpenTimes from '../data/OpenTimes'
import OpenHours from "./OpenHours"
import '@dotlottie/player-component';
import ChatBox from "./ChatBox";
import Video from "./Video";
export function Home() {const{id,open,close,day}=OpenTimes
  return (
    <>

      <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center relative mt-">

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
      <Video/>
      <section className="px-4 pb-20 pt-11 bg-white">
        <div className="flex  flex-cols-3 justify-center"><dotlottie-player  className=' '
  src="https://lottie.host/7b5e7591-d020-4d3f-9f2e-02d1a90ec50e/vqKjE34K77.json"
  background="transparent"
  speed={1}
  style={{ width: 700, height: 600 }}
  loop=""
  autoPlay=""
 
/>
<dotlottie-player
  src="https://lottie.host/af0f01d1-9d51-4508-904e-10a045231184/CVhqp8c1NN.json"
  background="transparent"
  speed={1}
  style={{ width: 700, height: 600 }}
  direction={1}
  loop=""
  autoPlay=""
 
/>


<dotlottie-player
  src="https://lottie.host/7bb3c7f4-a5a2-4cc5-98e4-8026dc539a24/FHFvILMGVF.json"
  background="transparent"
  speed={1}
  style={{ width: 700, height: 600 }}
  direction={1}
  loop=""
  autoPlay=""
 
/>



</div>
      


        {/* {featuresData.map(({ title, img, description }) => (
              <Example key={title} title={title} img={img} description={description} />
            ))} */}
        <Example />
        {/* <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ title, img, description }) => (
              <FeatureCard key={title} title={title} img={img} description={description} />
            ))}
          </div>
        </div> */}
      </section>

      <section className="px-4 pb-20 pt-4 bg-white">
        <div className="container mx-auto">
          <Typography variant="h1" color="black" className="text-center mb-8 font-black">
            WHAT CLIENTS SAY
          </Typography>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4">
            {Customers.map(({ id, name, img, comment }) => (
              <Testomonials key={id} name={name} comment={comment} img={img} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 pt-4 bg-white">
        <div className="container mx-auto">
          <Typography variant="h1" color="Black" className="text-center mb-8 font-black">
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
      <div><ChatBox/></div>
    </>
  );
}

export default Home;
