/* eslint-disable jsx-a11y/iframe-has-title */
import Button from "landing-page/custom-components/Button";
import React from "react";
import "../styles/possibilities.css";
// import video from "../../video-src/credence_compressed_video.mp4";

function Possibilities() {
  return (
    <>
      <div className="container mx-auto p-3 hands lg:h-[809px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-[247px] gap-8 lg:w-10/12 mx-auto">
          <div className="left">
            <h2 className="font-thickest text-[30px] lg:text-[50px] text-navWhite leading-[40px]">
              Endless possibilities for Africa's Commodities Market.
            </h2>
            <Button
              text="Learn more"
              className="font-thick text-navWhite text-[18px] leading-[25px] bg-credenceOrange rounded-[10px] py-[12px] px-[30px] mt-10"
            />
          </div>
          <div className="right">
            {/* <video
              className="bg-navWhite"
              src="../../video-src/Credence.mp4"
              width="344px"
              height="552px"
              title="Farming Pioneer"
              autoPlay
              muted
              loop
            ></video> */}
            {/* <video
              className="bg-navWhite"
              src={video}
              width="344px"
              height="552px"
              title="Farming Pioneer"
              muted
              loop
              controls
            ></video> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Possibilities;
