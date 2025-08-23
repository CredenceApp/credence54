import React from "react";
import partnersImg from "../../assets/credence_partners_hero.png";
import heroImg from "../../assets/industry.png";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <>
      <div className="container mx-auto bg-bgGreyLight">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
          <div className="left">
            <h2 className="font-thickest leading-[45px] text-[36px] text-textGreen my-3">
              Trade Beyond Borders
            </h2>
            <h2 className="font-thicker leading-[45px] text-[36px] text-textGreen my-3">
              Fueling Agribusiness Through Access To Capital And Market.
            </h2>
            <p className="font-light leading-[32px] text-2xl text-textDark my-3">
              We connect agribusinesses with capital, ready market and management
              tools for sustainable business growth.
            </p>
            <p className="py-3 mt-6">
              <Link
                to="/auth/signup"
                className="text-white bg-credenceOrange rounded-[8px] py-[12px] px-[30px] no-underline"
              >
                Create Account
              </Link>
            </p>
            <div className="partnership mt-20">
              <p className="font-light leading-[24px] text-[14px] text-materialGreen my-3">
                In partnership with
              </p>
              <img className="w-[548px] lg:w-auto lg:h-auto h-[78px]" src={partnersImg} alt="afex" loading="lazy" />
            </div>
          </div>
          <div className="right w-full">
            <img src={heroImg} alt="Hero Tractor" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
