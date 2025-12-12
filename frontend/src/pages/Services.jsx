import React, { useState } from "react";
import { assets } from "../assets/assets";

const TiltCard = ({ title, description, image }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const threshold = 12;

  const handleMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setTilt({ x: y * -threshold, y: x * threshold });
  };

  return (
    <div
      className="rounded-xl shadow-xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer bg-white max-w-80"
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
    >
      <img src={image} alt={title} className="w-full h-52 object-cover" />
      <h3 className="mt-3 px-4 pt-3 mb-1 text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm px-4 pb-6 text-gray-600 w-5/6">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Same-Day Delivery",
      description: "Fast and reliable delivery of packages within the same day to your customers.",
      image: assets.service1,
    },
    {
      title: "International Courier",
      description: "Seamless shipping services for international orders with real-time tracking.",
      image: assets.service2,
    },
    {
      title: "Warehousing & Storage",
      description: "Secure and organized storage solutions for inventory management.",
      image: assets.service3,
    },
    {
      title: "Courier Tracking",
      description: "Real-time tracking system to keep customers informed about package status.",
      image: assets.service4,
    },
  ];

  return (
    <section className="w-full py-15 px-10 bg-gray-50 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-3 text-center">Our Courier Services</h2>
      <p className="text-gray-600 text-lg mb-12 text-center">
        Discover our range of courier and delivery services designed to get your packages where they need to be, efficiently and securely.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {services.map((service, index) => (
          <TiltCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
