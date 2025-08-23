import React, { useState } from "react";
import { faqs } from "utils/utils";
import greyCircle from "../../assets/grey_circle.svg";
import greenCircle from "../../assets/green_circle.svg";
import greenArrow from "../../assets/arrow_right_green.svg";
import greyArrow from "../../assets/arrow_right_grey.svg";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dropdown, setDropdown] = useState(false);

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const toggleDrop = (index) => {
    if (dropdown === index) {
      setDropdown(false);
    } else {
      setDropdown(index);
    }
  };

  return (
    <>
      <div
        className="container lg:mx-auto bg-credenceGreen p-3 h-[1194px]"
        id="faqs"
      >
        <div className="w-11/12 mx-auto mt-[138px]">
          <h2 className="text-lightGreen text-[48px] font-thickest leading-[64px]">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="faqs hidden lg:flex -space-x-10 w-11/12 mx-auto mt-24">
          <div className="questions h-[360px]">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-navWhite w-[640px] flex justify-between items-center py-[24px] px-[16px] border-b border-b-gray-400 cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex items-center space-x-5">
                  <img
                    className="w-[24px] h-[24px]"
                    src={index === activeIndex ? greenCircle : greyCircle}
                    alt={index === activeIndex ? "circle green" : "circle grey"}
                  />
                  <p className="text-left text-[16px] leading-[24px] font-semibold text-lightBlack">
                    {faq.question}
                  </p>
                </div>
                <img
                  className="w-[24px] h-[24px]"
                  src={index === activeIndex ? greenArrow : greyArrow}
                  alt={index === activeIndex ? "circle green" : "circle grey"}
                />
              </div>
            ))}
          </div>
          <div className="answers bg-whiteLight w-[648px] min-h-[472px] rounded-[10px] flex justify-center -translate-y-8 p-10">
            {faqs[activeIndex] && (
              <div className="py-[24px] px-[16px]">
                <p className="text-[18px] leading-[28px] font-thickShade">
                  {faqs[activeIndex].question}
                </p>
                <p className="text-[16px] leading-[24px] font-light text-blackShade mt-12">
                  {faqs[activeIndex].answer}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="faqs_mobile mt-24 lg:hidden">
          {faqs?.map((faq, index) => (
            <div
              key={index}
              className="bg-navWhite"
              onClick={() => {
                toggleDrop(index);
              }}
            >
              <p className="text-left text-[16px] leading-[24px] text-lightBlack flex justify-between p-3 my-2 font-semibold">
                {faq?.question}
                <span
                  className="text-brightPurple"
                  onClick={() => {
                    toggleDrop(index);
                  }}
                >
                  {" "}
                  {dropdown === index ? (
                    <FaChevronUp className="cursor-pointer text-credenceGreen" />
                  ) : (
                    <FaChevronDown className="cursor-pointer text-credenceGreen" />
                  )}{" "}
                </span>{" "}
              </p>
              {dropdown === index ? (
                <p className="text-left text-[16px] leading-[24px] font-light text-lightBlack p-3">
                  {faq?.answer}
                </p>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Faq;
