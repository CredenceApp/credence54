import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { IoIosClose, IoMdWarning } from "react-icons/io";
import TopBar from "./topbar";

function Decline() {
  return (
    <div className="h-screen">
      <TopBar />
      <div className="flex justify-center items-center h-5/6">
        <div className="flex flex-col">
          <span className="mx-auto text-7xl text-credenceGreen">
            <IoMdWarning />
          </span>
          <h2 className="font-thickShade text-[34px] leading-forty text-themeNeutral text-center">You have Opted to decline the transaction</h2>
          <p className="font-thick text-2xl leading-thirtyTwo text-themeGrey text-center">Are you sure you want to decline ?</p>
          <div className="mt-8 flex gap-8 mx-auto">
            <button
              onClick={''}
              className="flex gap-2 items-center rounded-[15px] border-2 border-credenceGreen px-[32px] py-[20px] text-credenceGreen hover:bg-credenceOrange hover:text-white hover:border-none"
            >
              <span>No</span>
              <span className="text-2xl">
                <IoIosClose />
              </span>
            </button>
            <button className="flex gap-2 items-center rounded-[15px] bg-credenceGreen text-white px-[28px] py-[20px] text-credenceGreen hover:bg-credenceOrange">
              <span>Yes, Sure!</span>
              <span>
                <BsArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Decline;
