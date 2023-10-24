import { featuresData } from "@/data";
import { FeatureCard } from "@/widgets/cards";
import FooterTwo from "./FooterTwo";
function Services() {
  return (
    <div className=" bg-white dark:bg-black">
      {" "}
      <div className="  bg-white dark:bg-black">
        {" "}
        <section className=" px-4 pb-20 pt-2  bg-white dark:bg-black ">
          <div className="bg-white p-2 md:p-8  bg-white dark:bg-black">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3  bg-white dark:bg-black">
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
        </section>
      </div>
      <FooterTwo />
    </div>
  );
}

export default Services;
