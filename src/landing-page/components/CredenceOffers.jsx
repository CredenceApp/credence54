import React from "react";
import { credenceOffers } from "utils/utils";
import '../styles/credenceOffers.css';

function CredenceOffers() {
  return (
    <>
      <div className="container mx-auto offers p-3 lg:h-[882px]" id="features">
        <h2 className="py-[145px] font-light text-[45px] leading-[52px] text-center text-mainBlack">
          What Credence Offers
        </h2>
        <div className="credence_offers lg:w-11/12 lg:mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-4 mb-10">
            {credenceOffers.map((offers, index) => (
              <div
                className="bg-navWhite rounded-md text-center p-4 shadow-md lg:w-[315px] lg:h-[472px] flex flex-col justify-center"
                key={index}
              >
                <h2 className="text-mainBlack font-light text-[28px] leading-[34px] l:gtext-[36px] lg:leading-[44px] my-2">
                  {offers.title}
                </h2>
                <p className="font-light text-[24px] leading-[32px] text-lightBlack my-2">
                  {offers.textt}
                </p>
                {/* <p className="flex mx-auto gap-2 items-center text-credenceOrange font-light text-[22px] leading-[26.px] my-2">
                  {offers.learn}{" "}
                  <span>
                    <offers.icon />
                  </span>
                </p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CredenceOffers;
