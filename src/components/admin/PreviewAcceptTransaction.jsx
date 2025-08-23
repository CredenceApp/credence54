import React from "react";
import { IoIosClose } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import TopBar from "components/topbar";
import { useNavigate } from "react-router-dom";

function PreviewAcceptTransaction() {
    const navigate = useNavigate();

    const goToDecline = () => navigate('/decline');

  return (
    <div className="">
      <TopBar />
      <div className="p-4 mt-10">
        <div className="w-full lg:w-3/4 mx-auto">
          <div>
            <h2 className="font-thickShade text-3xl leading-forty text-themeNeutral">
              Preview your Transaction Details
            </h2>
            <p className="font-thick text-base leading-thirtyTwo text-themeGrey">
              Credence ensures you get value, always.
            </p>
          </div>
          <div className="mt-12 border-b border-b-themeGrey py-2">
            <h1 className="font-thickShade text-[22px] leading-forty text-themeNeutral">
              YOUR TRADE TRANSACTION
            </h1>
          </div>
          <div className="border-b border-b-themeGrey grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 py-2 mt-12">
            <div className="flex flex-col">
              <div>
                <h4 className="font-thickShade text-xl text-themeNeutral leading-thirtyTwo">
                  Commodity Name
                </h4>
                <p className="font-thick text-base leading-thirtyTwo text-themeGrey">
                  Business on Commodities
                </p>
              </div>
              <div className="mt-auto mb-auto">
                <h4 className="font-thickShade text-xl text-themeNeutral leading-thirtyTwo">
                  Commodity Description
                </h4>
                <p className="font-thick text-base leading-thirtyTwo text-themeGrey">
                  220 tubers of yam
                </p>
              </div>
            </div>
            <div>
              <div>
                <h4 className="font-thickShade text-xl text-themeNeutral leading-thirtyTwo">
                  Trade Partner
                </h4>
                <div>
                  <p className="font-thick text-base leading-thirtyTwo text-themeGrey">
                    Mr Oluwasemiloore Adewale
                  </p>
                  <p className="font-thick text-base leading-thirtyTwo text-themeGrey">
                    Email: adewalesemiloore@gmail.com
                  </p>
                  <p className="font-thick text-base leading-thirtyTwo text-themeGrey">
                    Tel: +2348133920420
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-thickShade text-xl text-themeNeutral leading-thirtyTwo">
                  Estimated Delivery Date
                </h4>
                <p className="font-thick text-base leading-thirtyTwo text-themeGrey">
                  Expires in 3 days
                </p>
                <p className="font-thick text-base leading-thirtyTwo text-themeGrey">
                  June 4, 2023
                </p>
              </div>
            </div>
          </div>
          <div className="border-b border-b-themeGrey grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 py-2 mt-12">
            <div>
              <h4 className="font-thickShade text-xl text-themeNeutral leading-thirtyTwo">
                Price
              </h4>
              <p className="font-thick text-base leading-thirtyTwo text-themeGrey">
                #197, 000.00
              </p>
            </div>
            <div>
              <h4 className="font-thickShade text-xl text-themeNeutral leading-thirtyTwo">
                Commodity Quality
              </h4>
              <p className="font-thick text-base leading-thirtyTwo text-themeGrey">
                Very Good
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 py-2 mt-12">
            <div>
              <h4 className="font-thickShade text-xl text-themeNeutral leading-thirtyTwo">
                Price
              </h4>
              <div>
                <p className="font-thick text-base leading-thirtyTwo text-themeGrey">
                  Mr Akame Samuel
                </p>
                <p className="font-thick text-base leading-thirtyTwo text-themeGrey">
                  Email: agbojachukwudavid@gmail.com
                </p>
                <p className="font-thick text-base leading-thirtyTwo text-themeGrey">
                  Tel: +234 8107548650
                </p>
              </div>
            </div>
            <div>
              <div>
                <h4 className="font-thickShade text-xl text-themeNeutral leading-thirtyTwo">
                  Shipping Method
                </h4>
                <p className="font-thick text-base leading-thirtyTwo text-themeGrey">
                  By Road
                </p>
              </div>
              <div className="mt-6">
                <h4 className="font-thickShade text-xl text-themeNeutral leading-thirtyTwo">
                  Transaction Status
                </h4>
                <p className="font-thick text-base leading-thirtyTwo text-themeGrey">
                  Awaiting Approval
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex gap-8">
            <button onClick={goToDecline} className="flex gap-2 items-center rounded-[15px] border-2 border-credenceGreen px-[24px] py-[20px] text-credenceGreen hover:bg-credenceOrange hover:text-white hover:border-none">
              <span>Decline Trade</span>
              <span className="text-2xl">
                <IoIosClose />
              </span>
            </button>
            <button className="flex gap-2 items-center rounded-[15px] bg-credenceGreen text-white px-[28px] py-[20px] text-credenceGreen hover:bg-credenceOrange">
              <span>Accept Trade</span>
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

export default PreviewAcceptTransaction;
