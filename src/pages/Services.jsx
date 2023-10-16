import { featuresData } from "@/data"
import { FeatureCard } from "@/widgets/cards"

function Services() {
    return (<div>     <div className="my-14 "> <section className=" bg-gray-50 px-4 pb-20 pt-2 ">
      <div className="absolute top-0   bg-no-repeat bg-cover h-screen ">
          <img src="/img/service.jpg"></img>
        </div>
     <div className="container mx-auto mt-10">
       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
         {featuresData.map(({ title, img, description }) => (
           <FeatureCard
             key={title}
             title={title}
             img={img}
             description={description}
           />
         ))}
       </div>
  </div>
  </section></div></div>

        
       
       
    )
}

export default Services
