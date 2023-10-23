import { featuresData } from "@/data";
import { FeatureCard } from "@/widgets/cards";
import FooterTwo from "./FooterTwo";
function Services() {
  return (
    <div>
      {" "}
      <div className="my-14 ">
        {" "}
        <section className=" bg-gray-50 px-4 pb-20 pt-2 ">
          <div className="bg-white p-2 md:p-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
