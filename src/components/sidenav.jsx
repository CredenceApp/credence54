import { faMoneyBill1 } from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faShop,
  faCog,
  faDashboard,
} from "@fortawesome/free-solid-svg-icons";
import { BsShieldLockFill } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { FaMoneyBill } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logoutUser } from "redux/slices/authUser";
import { MdBusinessCenter } from "react-icons/md";
import sidebarLogo from "../assets/sidebar_logo.svg";

const myImage = require("../assets/Frame 58 (1).png");
const Logo = require("../assets/Union (1).png");

function Sidenav() {
  const [activeLink, setActiveLink] = useState("dashboard");
  const [showSidebar, setShowSidebar] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const logout = async () => {
    await dispatch(logoutUser()).then((res) => {
      navigate("/auth/login");
    });
  };

  useEffect(() => {
    // Update activeLink when route changes
    const pathname = location.pathname;
    if (pathname === "/user/dashboard") {
      setActiveLink("dashboard");
    } else if (pathname === "/user/market") {
      setActiveLink("market");
    } else if (pathname === "/user/transactions") {
      setActiveLink("escrow");
    } else if (pathname === "/user/payment") {
      setActiveLink("pay");
    } else if (pathname === "/user/capital") {
      setActiveLink("capital");
    } else if (pathname.startsWith("/user/settings")) {
      setActiveLink("settings");
    } else if (pathname.startsWith("/user/market-place-transactions")) {
      setActiveLink("transaction");
    }
  }, [location]);
  return (
    <header className="bg-newCredenceGreen hidden lg:w-[24%] xl:w-[22%] lg:min-h-screen items-center justify-between lg:block lg:fixed">
      <nav className="flex flex-col py-[17px] px-[22px] gap-8">
        <div className="brand sidebrand">
          <img className="" src={sidebarLogo} alt="" />
        </div>
        <ul className={`navigation navigations ${showSidebar ? "show" : ""}`}>
          <li
            className={
              activeLink === "dashboard" ? "activee bg-white" : "text-white"
            }
          >
            <FontAwesomeIcon
              className="navIcon"
              color={
                activeLink === "dashboard" ? "rgba(42, 112, 102, 1)" : "white"
              }
              size="2x"
              icon={faDashboard}
            />
            <Link
              className={`${
                activeLink === "dashboard"
                  ? "text-newCredenceGreen"
                  : "text-white"
              }`}
              to="/user/dashboard"
              onClick={() => handleLinkClick("dashboard")}
            >
              Dashboard
            </Link>
          </li>
          <li
            className={
              activeLink === "market" ||
              location.pathname === "/user/view-seller"
                ? "activee bg-white"
                : "text-white"
            }
          >
            {/* <img src={Dash} alt="" /> */}
            <FontAwesomeIcon
              className="navIcon"
              color={
                activeLink === "market" ? "rgba(42, 112, 102, 1)" : "white"
              }
              size="2x"
              icon={faShop}
            />
            <Link
              className={`${
                activeLink === "market"
                  ? "text-newCredenceGreen bg-white"
                  : "text-white"
              }`}
              to="/user/market"
              onClick={() => handleLinkClick("market")}
            >
              Marketplace
            </Link>
          </li>
          <li
            className={
              activeLink === "escrow" ? "activee bg-white" : "text-white"
            }
          >
            {/* <img src={transact} alt="" /> */}
            <BsShieldLockFill className="text-[35px]" />
            <Link
              className={`${
                activeLink === "escrow"
                  ? "text-newCredenceGreen"
                  : "text-white"
              } text-base`}
              to="/user/escrow-transactions"
              onClick={() => handleLinkClick("escrow")}
            >
              Escrow
            </Link>
          </li>
          {/* <li
            className={
              activeLink === "transaction" ? "activee bg-white" : "text-white"
            }
          >
            <span>
              <MdBusinessCenter size={35} />
            </span>
            <Link
              className={`${
                activeLink === "transaction"
                  ? "text-newCredenceGreen "
                  : "text-white"
              }`}
              to="/user/market-place-transactions"
              onClick={() => handleLinkClick("transaction")}
            >
              Transactions
            </Link>
          </li> */}
          <li
            className={`${
              activeLink === "capital" ? "activee bg-white" : "text-white"
            }`}
          >
            <FaMoneyBill size={"35px"} />
            <Link
              to="/user/capital"
              className={`${
                activeLink === "capital"
                  ? "text-newCredenceGreen"
                  : "text-white"
              } text-base`}
            >
              Capital
            </Link>
          </li>
        </ul>
      </nav>
      {/* <span
        className="lg:hidden text-white px-2 cursor-pointer"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <GiHamburgerMenu />
      </span> */}
    </header>
  );
}

export default Sidenav;
