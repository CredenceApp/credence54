import { useNavigate } from "react-router-dom";
import iphone from "../../assets/Iphone_homepage_mockup.png";

function GetStarted() {
  const navigate = useNavigate();

  return (
    <div className="w-full p-6" id="how-it-works">
      <div className="w-[90%] container mx-auto grid place-items-center ">
        <div className="flex flex-col lg:flex-row md:items-center ">
          <div className="md:w-1/3">
            <img src={iphone} alt="a smart phone" className="w-[420px]" />
          </div>
          <div className="second-box md:w-2/3">
            <div className="text-center md:text-justify">
              <p className="font-['public_sans'] md:text-[47px]  ">
                Secure financing, discover markets, trade with confidence.{"  "}
                <span className="font-semibold">
                  Start your Credence journey today.
                </span>
              </p>
            </div>
            <div className="py-2">
              <p className="font-['roboto'] md:text-[28px] ">
                On Credence, you'll find the tools and resources to fuel your
                growth.
              </p>
            </div>
            <div className=" flex flex-col items-center md:block ">
              <div className="box-1 pb-4 flex items-baseline ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#F08A25"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </div>
                <div className="">
                  <p className="font-['roboto'] md:text-[28px]">
                    Access flexible financing
                  </p>
                </div>
              </div>
              <div className="box-2 pb-4  flex items-baseline ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#F08A25"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </div>
                <p className="text-center md:text-left font-['roboto'] md:text-[28px]">
                  Connect with agro commodity buyers and sellers
                </p>
              </div>
              <div className="box-3  pb-4 flex items-baseline  ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#F08A25"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </div>
                <p className="font-['roboto'] md:text-[28px]">
                  Secure your transactions
                </p>
              </div>
            </div>
            <div className="">
              <p
                className="font-['public_sans'] italic md:text-[28px]"
              >
                all within one seamless platform.
              </p>
            </div>
            <div className=" flex justify-center md:block">
              <button
                onClick={() => navigate("/auth/signup")}
                className=" text-white bg-[#F08A25] mt-10 py-1 px-3 text-center rounded-[8px] font-['roboto'] md:text-[28px]"
              >
                Sign up to get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
