import React from "react";

const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-800">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
            Our logistics solutions help companies ship faster, safer, and smarter.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {/* 1 */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center hover:shadow-md transition">
            <h3 className="text-4xl font-bold text-indigo-600">12K+</h3>
            <p className="text-sm text-slate-600 mt-2">Shipments Delivered Monthly</p>
          </div>

          {/* 2 */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center hover:shadow-md transition">
            <h3 className="text-4xl font-bold text-indigo-600">98%</h3>
            <p className="text-sm text-slate-600 mt-2">On-Time Delivery Rate</p>
          </div>

          {/* 3 */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center hover:shadow-md transition">
            <h3 className="text-4xl font-bold text-indigo-600">75+</h3>
            <p className="text-sm text-slate-600 mt-2">Countries Served</p>
          </div>

          {/* 4 */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center hover:shadow-md transition">
            <h3 className="text-4xl font-bold text-indigo-600">4.9/5</h3>
            <p className="text-sm text-slate-600 mt-2">Customer Satisfaction</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
