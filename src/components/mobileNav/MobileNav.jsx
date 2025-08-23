import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import { BsShieldLockFill } from "react-icons/bs";
import { FaMoneyBill } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { MdBusinessCenter } from "react-icons/md";

function MobileNav() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 flex justify-around w-full lg:hidden bg-bgGreyLight p-3">
      <ul className="flex justify-between gap-2 w-full">
        <li className="">
          <NavLink
            to="/user/dashboard"
            className={`flex flex-col mx-auto ${
              location.pathname === "/user/dashboard"
                ? "text-credenceGreen"
                : "text-textDark"
            }`}
          >
            <span className="mx-auto">
              <AiFillDashboard className="text-2xl" />
            </span>
            <p className="hidden">Dashboard</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user/market"
            className={`flex flex-col mx-auto ${
              location.pathname === "/user/market"
                ? "text-credenceGreen"
                : "text-textDark"
            }`}
          >
            <span>
              <FaShop className="text-2xl" />
            </span>
            <p className="hidden">Marketplace</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user/escrow-transactions"
            className={`flex flex-col mx-auto ${
              location.pathname === "/user/escrow-transactions"
                ? "text-credenceGreen"
                : "text-textDark"
            }`}
          >
            <span>
              <BsShieldLockFill className="text-2xl" />
            </span>
            <p className="hidden">Escrow</p>
          </NavLink>
        </li>
        {/* <li className="text-textDark">
          <NavLink
            to="/user/market-place-transactions"
            className={`flex flex-col mx-auto ${
              location.pathname === "/user/market-place-transactions" ? "text-credenceGreen" : 'text-textDark'
            }`}
          >
            <span>
              <MdBusinessCenter className="text-2xl" />
            </span>
            <p className="hidden">Transaction</p>
          </NavLink>
        </li> */}
        <li className="text-textDark">
          <>
            <NavLink
              to="/user/capital"
              className={`flex flex-col mx-auto ${
                location.pathname === "/user/capital"
                  ? "text-credenceGreen"
                  : "text-textDark"
              }`}
            >
              <span>
                <FaMoneyBill className="text-2xl" />
              </span>
              <p className="hidden">Capital</p>
            </NavLink>
          </>
        </li>
      </ul>
    </div>
  );
}

export default MobileNav;
