import { ArrowCircleRightIcon, ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/solid";
import React from "react";
import Benefit from "../Benefit/Benefit";

const PricingOptions = (props) => {
  const { name, price, benefits } = props.option;
  return (
    <div className="bg-white p-4 rounded-lg">
      <h1 className="bg-indigo-300 rounded-lg py-2 font-bold">{name}</h1>
      <p>
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-xl font-bold text-gray-500">/mo</span>
      </p>
      <p>
        <h2 className="text-2xl text-left">Benefits:</h2>
        {
            benefits.map(benefit=><Benefit
            benefit={benefit}
            ></Benefit>)
        }
      </p>
      <button className="bg-green-500 w-full p-1 rounded-lg mt-2 flex justify-center text-black hover:bg-green-700 hover:font-bold  ">Buy Now
      <ArrowRightIcon className="w-6 h-6 ml-2"></ArrowRightIcon>
      </button>
    </div>
  );
};

export default PricingOptions;
