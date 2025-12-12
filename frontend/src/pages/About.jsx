import React from 'react';
import { Truck, Package, MapPin } from 'lucide-react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className='w-full py-15 bg-gray-50 flex flex-col items-center'>
      <h1 className="text-3xl font-semibold text-center mx-auto">About Our Courier Service</h1>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">
        Delivering packages with speed, reliability, and care — our courier solutions are tailored for efficiency and customer satisfaction.
      </p>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0 py-10">
        <img className="max-w-sm w-full rounded-xl h-auto"
          src={assets.service1}
          alt="Courier Delivery" />
        <div>
          <h1 className="text-3xl font-semibold">Our Key Features</h1>
          <p className="text-sm text-slate-500 mt-2">
            Experience top-notch courier services with real-time tracking, fast delivery, and secure handling of all your packages.
          </p>

          <div className="flex flex-col gap-10 mt-6">
            <div className="flex items-center gap-4">
              <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                <Truck size={32} color="#6366F1" />
              </div>
              <div>
                <h3 className="text-base font-medium text-slate-600">Lightning-Fast Delivery</h3>
                <p className="text-sm text-slate-500">Same-day and next-day delivery options to ensure timely shipments.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                <Package size={32} color="#6366F1" />
              </div>
              <div>
                <h3 className="text-base font-medium text-slate-600">Safe and Secure Handling</h3>
                <p className="text-sm text-slate-500">All packages are handled with care and tracked throughout the delivery process.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                <MapPin size={32} color="#6366F1" />
              </div>
              <div>
                <h3 className="text-base font-medium text-slate-600">Real-Time Tracking</h3>
                <p className="text-sm text-slate-500">Track your shipments live with our easy-to-use courier tracking system.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
