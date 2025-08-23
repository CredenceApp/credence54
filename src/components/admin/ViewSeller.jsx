import React from "react";
import { BsBagPlus } from "react-icons/bs";
import { commodities } from "utils/utils";
import { FaFilter } from "react-icons/fa";
import { GoDotFill } from 'react-icons/go';
import { IoIosArrowDown } from "react-icons/io";

function ViewSeller() {
  return (
    <div className="p-4 overflow-y-scroll">
      <div className="flex flex-col gap-3 lg:gap-1 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-dashHeader leading-[36px] font-thicker">
          Marketplace
        </h2>
        <div className="maerket_btns flex gap-2">
          <button className="border-2 border-newCredenceGreen text-newCredenceGreen text-base flex items-center gap-2 px-[24px] py-[10px] rounded-[8px] font-thick">
            <span>
              <BsBagPlus />
            </span>
            <span>Buy Commodities</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-2 items-baseline mt-5">
        <div className="flex items-center gap-2 bg-white shadow-lg py-3 px-4 rounded-lg justify-between cursor-pointer">
          <span>All Commodities</span>
          <span>
            <IoIosArrowDown />
          </span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3 py-3 rounded-lg lg:justify-between cursor-pointer">
          <div className="bg-white shadow-lg py-2 px-4 rounded-lg flex items-center space-x-4">
            <span>From</span>
            <input type="date" />
          </div>
          <div className="bg-white shadow-lg py-2 px-4 rounded-lg flex items-center space-x-4">
            <span>To</span>
            <input type="date" />
          </div>
          <div className="bg-primary95 border border-materialNewLightGreen shadow-lg py-2 rounded-lg flex items-center gap-2 justify-center min-w-[88px] min-h-[40px]">
            <span>
              <FaFilter />
            </span>
            <span>Filter</span>
          </div>
        </div>
      </div>
      <div className="p-4 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {commodities.map((item, index) => (
            <div className="rounded-[9px] p-4 border border-themeTertiary" key={index}>
                <div className="flex gap-3 justify-between">
                    <h2 className="text-lg font-thicker leading-twentyOne">{item.commodity}</h2>
                    <span className="text-credenceGreen text-base">{<item.icon />}</span>
                </div>
                <p className="flex gap-2 items-center text-sm leading-sixteen text-themeNeutral font-[300] mt-3">
                    <span>{item.company}</span>
                    <span><GoDotFill /></span>
                    <span>{item.location}</span>
                </p>
                <p className="flex gap-2 items-center text-sm leading-sixteen text-themeNeutral font-[300] mt-3">
                    <span>Duration:</span>
                    <span>{item.duration}</span>
                </p>
                <div className="flex gap-2 justify-between items-center mt-4">
                    <h2 className="text-[15px] font-thicker leading-seventeen">{item.price}</h2>
                    <button className="rounded-[4px] px-8 py-1 bg-credenceGreen text-white">Bid</button>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default ViewSeller;
