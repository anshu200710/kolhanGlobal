import React from "react";
import expressDeliveryImg from "../assets/express-delivery.svg";
import freightShippingImg from "../assets/freight-shipping.svg";
import warehouseImg from "../assets/warehouse-storage.svg";

const ShippingOptions = () => {
  return (
    <section className="py-10">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-center mx-auto">
        Shipping Options
      </h1>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">
        Reliable delivery services designed to meet every business need—
        fast, secure, and globally connected.
      </p>

      {/* Cards */}
      <div className="flex flex-wrap items-center justify-center gap-10 mt-16">
        
        {/* Option 1 */}
        <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
          <img
            className="rounded-xl"
            src={expressDeliveryImg}
            alt="Express Delivery"
          />
          <h3 className="text-base font-semibold text-slate-700 mt-4">
            Express Delivery
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Fast and reliable same-day or next-day delivery across major locations.
          </p>
        </div>

        {/* Option 2 */}
        <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
          <img
            className="rounded-xl"
            src={freightShippingImg}
            alt="Freight Shipping"
          />
          <h3 className="text-base font-semibold text-slate-700 mt-4">
            Freight Shipping
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Move heavy cargo with our road, air, and ocean freight solutions.
          </p>
        </div>

        {/* Option 3 */}
        <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
          <img
            className="rounded-xl"
            src={warehouseImg}
            alt="Warehouse & Storage"
          />
          <h3 className="text-base font-semibold text-slate-700 mt-4">
            Warehousing & Storage
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Secure inventory management with temperature-controlled facilities.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ShippingOptions;
