import React from "react";
import logo from "../../../assets/new_logo.svg";
import { interestRate, requirementLists } from "./dummyData";

function Capital() {
  const loanForm = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScpyyRYdArvZ6ynSMvZRY9iI6evOs53l91AwH83EH4UNeqp4A/viewform?usp=send_form",
      "_blank"
    );
  };

  return (
    <div className="p-2 mb-24 lg:mb-0 ">
      <h4 className="mt-4 font-semibold text-base md:text-[1.625rem] leading-9">
        Capital Access
      </h4>
      <div className="container mx-auto">
        <h1 className="font-semibold text-xs md:text-base leading-5 bg-capitalGrey rounded-[0.625rem] p-3 mt-12">
          Loan Services Overview
        </h1>
        <p className="text-textGreen mt-8 text-xs md:text-base font-normal leading-5 ml-5">
          We provide short-term financing options customised for Agri-SMEs and
          Trade/Supply Chain businesses.
        </p>
        <div className="loan_service_texts mt-8 ml-5">
          <div className="loan_duration">
            <h5 className="font-bold text-xs md:text-[0.9375rem] leading-5">
              Loan Duration:
            </h5>
            <p className="font-normal text-xs md:text-[0.9375rem] leading-5">
              From 2 weeks to 3 months.
            </p>
          </div>
          <div className="locations_covered">
            <h5 className="font-bold text-xs md:text-[0.9375rem] leading-5">
              Locations Covered:
            </h5>
            <p className="font-normal text-xs md:text-[0.9375rem] leading-5">
              Our services extend to Lagos, Kano, Abuja, Port Harcourt, Aba,
              Uyo, Warri, Ibadan, Enugu, and Ogun states.
            </p>
          </div>
          <div className="key_requirements mt-8">
            <h5 className="font-bold text-xs md:text-[0.9375rem] leading-5">
              Key Requirements for Trade Loans:
            </h5>
            {requirementLists?.map((list, index) => (
              <li
                key={index}
                className="font-normal text-xs md:text-[0.9375rem] leading-5"
              >
                {list}
              </li>
            ))}
          </div>
          <div className="interest_rate mt-8">
            <h5 className="font-bold text-xs md:text-[0.9375rem] leading-5">
              Interest Rates:
            </h5>
            {interestRate?.map((list, index) => (
              <li
                key={index}
                className="font-normal text-xs md:text-[0.9375rem] leading-5"
              >
                {list}
              </li>
            ))}
          </div>
        </div>
      </div>
      <div className="loan_btn_text_div mt-10 flex flex-col gap-[0.625rem] md:flex-row md:items-baseline">
        <p className="text-textGreen text-xs md:text-base font-normal leading-5">
          To make a loan request click the “Request Loan” button
        </p>
        <button
          onClick={loanForm}
          className="bg-textGreen text-white text-base font-medium leading-6 rounded-lg px-6 py-2"
        >
          Request Loan
        </button>
      </div>
    </div>
  );
}

export default Capital;
