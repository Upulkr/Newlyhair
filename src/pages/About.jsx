import React from 'react';

function About() {
  return (
    <div className="relative max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
      <div className="absolute top-0 left-0 w-full h-full bg-cover">
        <img src="/img/desktop-1680x1050.jpg" className="relative flex flex-wrap items-center" alt="Background" />
        <div className="max-w-2xl text-center mx-auto relative m-5 md:space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold md:text-3xl dark:text-white">Our Passion is  Your hair & healthy of your body !</h2>
            <p className="text-lg text-gray-800 dark:text-gray-200">
              Your natural hair. We prioritize hair health with conditioning treatments designed to imbue your hair with shine and vitality. Beyond hair services, we offer expert waxing for a smooth, flawless look. Choose Therapy Hair Salon for an unparalleled hair and beauty care experience.
            </p>
          </div>

          <p className="text-lg text-gray-800 dark:text-gray-200">
            We're proud to be a part of creating a more open culture and to continue building a product that supports this vision.
          </p>

          <p className="text-lg text-gray-800 dark:text-gray-200">
            We are passionate about making our guests look and feel great at Therapy Hair Salon! We offer a wide range of services customized to each individual’s needs, and they are always up-to-date on the latest trends. Our talented stylists are dedicated to providing a fantastic experience for every guest. Whether you’re getting your hair cut, colored, or styled, you can rest assured that you’ll leave Therapy Hair Salon looking and feeling your best.
          </p>

          <h2 className="font-bold md:text-3xl dark:text-white">Our Mission</h2>
          <p className="text-lg text-gray-800 dark:text-gray-200">
            To provide the highest quality haircare products and services along with outstanding customer service.
          </p>

          <blockquote className="text-center p-4 sm:px-7 absolute">
            <h2 className="font-bold md:text-3xl dark:text-white">Our Vision</h2>
            <p className="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal dark:text-gray-200">
              To be a salon that everyone always feels comfortable and welcomed in from the moment they walk in to the moment they leave. We want everyone to have such a great experience, that they can’t wait to tell their friends and family about us. We will continue to grow together and provide the highest quality products and latest trends to our guests.
            </p>
          </blockquote>

          <figure>
            <img className="w-full object-cover rounded-xl" src="./img/girl.jpg" alt="Image Description" />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default About;
