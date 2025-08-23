import { FaRegArrowAltCircleRight } from "react-icons/fa";
import "../styles/service.css";
import { Link } from "react-router-dom";

function ServiceBenefits() {
  return (
    <div className="p-6 bg-img">
      <div className="grid place-items-center p-8">
        <div>
          <p className="text-center  mb-6 font-['roboto'] font-normal text-[30px] lg:text-[45px]">
            Why partner with Credence?
          </p>
        </div>
        <div>
          <p className="mb-6 text-center font-['public_sans'] font-semibold italic text-[26px]  lg:text-[36px]">
            To <span className="text-[#F08A25]">enjoy</span> transparent and
            stress-free trading agricultural goods with a global market.
          </p>
        </div>
        <div>
          <p className="text-center mb-10 font-['public_sans'] text-[18px] lg:text-[28px] ">
            Get access to capital, a stable market of buyers and risk management
            solutions for your agribusiness. Join our ecosystem of empowered
            communities of traders, farmers, financiers across the agricultural
            landscape
          </p>
        </div>
        <div className="flex items-center gap-2 ">
          <Link
            to="#contact"
            className="font-['inter']  text-[#F08A25] lg:text-[31px] "
          >
            Partner with Credence Today
          </Link>
          <span className="text-credenceOrange">
            <FaRegArrowAltCircleRight />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ServiceBenefits;
