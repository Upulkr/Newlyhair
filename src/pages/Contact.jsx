import OpenTimes from "@/data/OpenTimes";
import OpenHours from "./OpenHours";

function Contact() {
  return (
    <div className="flex justify-center items-center ">
      <div className="w-full bg-[url('/img/p.jpg')] bg-cover bg-center h-2/4  ">
        <div className="w-full h-full flex justify-center items-center backdrop-brightness-50">
          <div className="container my-24 mx-auto md:px-6">
            {/* Section: Design Block */}
            <div></div>
            <section className="m-4 grid grid-cols-2 gap-4 mt-12 place-items-center ">
              <div className="block rounded-lg bg-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="flex flex-wrap items-center">
                  <div className="w-full lg:w-6/12 xl:w-4/12">
                    <div className="h-96 lg:h-[500px] w-full">
                      <iframe
                        src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        className="w-full h-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                        frameBorder={0}
                        allowFullScreen
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 xl:w-8/12  ">
                    <div className="flex flex-wrap pt-12 pb-12 md:pb-0 lg:pt-0">
                      <div className="w-full md:w-6/12 xl:w-6/12">
                        <div className="flex items-start">
                          <div className="mr-4">
                            <div className="inline-block rounded-md bg-primary-100 p-4 text-primary m-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-6 w-6 "
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="flex-grow">
                            <p className="mb-2 font-bold text-black">
                              Technical support
                            </p>
                            <p className="text-neutral-500 text-black">
                              support@example.com
                            </p>
                            <p className="text-neutral-500 text-black">
                              +1 234-567-89
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-6/12 xl:w-6/12 ">
                        <p className="mb-2 font-bold text-white text-center">
                          Open Hours
                        </p>
                        {OpenTimes.map((d) => (
                          <OpenHours
                            open={d.open}
                            close={d.close}
                            day={d.day}
                            key={d.id}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Section: Design Block */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
