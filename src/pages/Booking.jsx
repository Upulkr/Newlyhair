import React from "react";
import "@dotlottie/player-component";
import FooterTwo from './FooterTwo';
function Booking() {
  return (
    <>
      <div className="grid-row-2  grid   ">
        <div className=" mt-14 justify-center p-10 ">
          <h1 className="  text-center text-2xl font-extrabold ">
            Book an appointment
          </h1>
          <p className=" p-3 text-center text-lg">
            Get an appointment with our experienced Stylists & therapists
          </p>
        </div>

        <div className="grid md:grid-cols-2 ">
          {" "}
          <div className="m-3 items-center">
            <img
              className=" left-0 top-0 -z-10 h-full w-full object-cover"
              src="/img/book.jpg"
              alt=""
            />
          </div>{" "}
          <div className="flex items-center justify-center">
            <form className=" w-2/3 justify-center ">
              {" "}
              <div className="">
                {" "}
                <label
                  htmlFor="name"
                  className="m-3 block text-base font-medium text-[#07074D]"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-full rounded-md border border-blue-gray-900 bg-white px-6 p-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="phone"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="w-full rounded-md border border-blue-gray-900 bg-white px-6 p-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-blue-gray-900 bg-white px-6 p-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="date"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="w-full rounded-md border border-blue-gray-900 bg-white px-6 p-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="time"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Time
                    </label>
                    <input
                      type="time"
                      name="time"
                      id="time"
                      className="w-full rounded-md border border-blue-gray-900 bg-white px-6 p-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              <div>
                <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] px-8 p-2 text-center text-base font-semibold text-white outline-none">
                  Book Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <FooterTwo />
    </>

   
  );
}

export default Booking;
