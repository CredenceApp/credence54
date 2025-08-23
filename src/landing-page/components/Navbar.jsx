import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { authLinks, navLinks } from "utils/utils";
import logo from "../../assets/credence_logo.svg";
import userIcon from '../../assets/useruser_icon.svg';


function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const location = useLocation();
  return (
    <>
      <div className="bg-navWhite sticky w-full top-0 z-10 flex justify-between items-center px-[51px] lg:px-8 py-[21px]">
        <Link className="" to={"/"}>
          <>
            <img src={logo} alt="Credence logo" loading="lazy" />
          </>
        </Link>
        <div className="lg:flex lg:items-center gap-5 xl:gap-10 lg:w-full xl:w-[75%]">
          {/* <div className="justify-between lg:flex lg:items-center border border-textGreen mr-auto gap-2"> */}
          <ul
            className={`absolute lg:static w-full lg:w-full flex justify-between p-4 ${
              openNav
                ? "top-[5rem] left-0 z-20 bg-navWhite lg:bg-transparent flex"
                : "top-[-25rem] left-0 bg-navWhite lg:bg-transparent"
            } flex flex-col lg:flex-row justify-center items-center lg:items-center lg:justify-start gap-4 py-4 lg:py-2 transition-all duration-700 ease-in`}
          >
            {navLinks?.map((el, index) => (
              <li key={index}>
                <NavLink
                  to={el?.link}
                  target={el.name === 'Blogs' && '_blank'}
                  className={`text-textGreen text-[14px] no-underline leading-[20px] font-Inter font-thick py-[15px] px-[24px] rounded-[100px] bg-contrast ${
                    location.pathname === el?.link ? "active-link" : ""
                  }`}
                >
                  {el?.name}
                </NavLink>
              </li>
            ))}
            <ul className="flex flex-col justify-center items-center lg:justify-start lg:flex-row gap-3 lg:ml-auto">
              {authLinks?.map((el, index) => (
                <li key={index}>
                  <NavLink
                    to={el?.link}
                    className={`${
                      index === 1 &&
                      "text-white bg-credenceOrange rounded-[8px] py-[10px] px-[24px] no-underline"
                    } text-textGreen text-[16px] font-Inter font-thick py-[15px] px-[24px] rounded-[100px] flex items-center gap-2 ${
                      location.pathname === el?.link ? "active-link" : "no-underline"
                    }`}
                  >
                    {index === 0 && (<img src={userIcon} alt="icon" />)}
                    {el?.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </ul>
          {/* </div> */}
          <button
            className="lg:hidden p-2 text-2xl text-textGreen border border-textGreen rounded-md outline-none focus:border-green-600"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? <GrClose /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
