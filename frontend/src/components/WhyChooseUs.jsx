import React from "react";
import { Truck, Globe, ShieldCheck, Clock } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Truck className="w-8 h-8 text-indigo-600" />,
      title: "Fast & Reliable Delivery",
      description:
        "Get your shipments delivered quickly and safely, every time.",
    },
    {
      icon: <Globe className="w-8 h-8 text-indigo-600" />,
      title: "Global Coverage",
      description:
        "Our logistics network spans across multiple countries and continents.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
      title: "Secure Handling",
      description:
        "We ensure all cargo is handled with utmost care and safety protocols.",
    },
    {
      icon: <Clock className="w-8 h-8 text-indigo-600" />,
      title: "24/7 Support",
      description:
        "Our team is always available to assist you with shipments and tracking.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-slate-800">Why Choose Us</h2>
        <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
          Discover why businesses trust our logistics solutions to deliver success.
        </p>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition flex flex-col items-center text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-slate-800">{feature.title}</h3>
              <p className="text-sm text-slate-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
