import React from "react";
import grainImg from "../../assets/grain_bag.png";
import afex from '../../assets/afex.svg';
import africa from '../../assets/africa.svg';
import bisDay from '../../assets/bisness_day.svg';
import { experienceItemListLeft, experienceItemsListRight } from "utils/utils";

function Experience() {
  return (
    <>
      <div className="bg-navWhite p-3">
        <h2 className="text-mainBlack text-[34px] lg:text-[47px] leading-[61px] font-thick text-center py-[138px]">
          A new level of{" "}
          <span className="text-credenceOrange">transparency</span>{" "}
          <br className="hidden lg:block" /> in all agricultural commodity
          transactions. <br className="hidden lg:block" />
        </h2>
        <div className="our_work grid grid-cols-1 lg:grid-cols-2 gap-4 p-5">
          <div className="left_grain_img">
            <img className="w-[484px] h-[663px]" src={grainImg} alt="" />
          </div>
          <div className="right lg:relative">
            <h3 className="text-mainBlack text-[28px] leading-[36px] font-light text-justify ">
              We ensure the integrity of every transaction, protecting the interests of commodity
              buyers and sellers.
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-8">
              <div className="left">
                {experienceItemListLeft.map((list, index) => (
                  <div
                    className="flex items-start my-1 -space-x-3"
                    key={index}
                  >
                    <img src={list.icon} alt="checkmark" />
                    <p className="text-mainBlack text-[18px] lg:text-[28px] leading-[36px] font-light">
                      {list.text}
                    </p>
                  </div>
                ))}
              </div>
              <div className="right">
                {experienceItemsListRight.map((list, id) => (
                  <div
                    className="flex items-start my-1 -space-x-3"
                    key={id}
                  >
                    <img src={list.icon} alt="checkmark" />
                    <p className="text-mainBlack text-[18px] lg:text-[28px] leading-[36px] font-light">
                      {list.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:absolute lg:bottom-0">
              <p className="text-credenceOrange text-[28px] leading-[36px] font-light mt-12">
                Our work so far has given us a few media mention and industry
                Engagement.
              </p>
              <p className="text-materialGreen text-sm leading-[24px] font-light mt-10">
                Industry Validation & Media Mention
              </p>
              <div className="media_img flex justify-center space-x-2 p-3">
                <img src={afex} alt="afex" />
                <img src={bisDay} alt="business day" />
                <img src={africa} alt="welcome 2 Africa" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
