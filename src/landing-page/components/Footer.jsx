import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import twitter from "../../assets/x_twitter.svg";

import { Link } from "react-router-dom";

import logo from "../../assets/credence_logo.svg";

function Footer() {
  return (
    <div className=" bg-[#F2FFFB] p-3">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-2">
        <div>
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="social-icon flex space-x-2 mt-3 ml-2">
            <div>
              <p className="text-mainBlack p-2">
                <a
                  href="https://www.linkedin.com/company/credenceapphq/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-mainBlack"
                >
                  <FaLinkedin />
                </a>
              </p>
            </div>
            <div>
              <p className="text-mainBlack p-2">
                <a
                  href="https://www.instagram.com/credenceapphq/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-mainBlack"
                >
                  <FaInstagram />
                </a>
              </p>
            </div>
            <div>
              <p className="text-mainBlack p-2">
                <a
                  href="https://twitter.com/credenceapphq"
                  target="_blank"
                  rel="noreferrer"
                  className="text-mainBlack"
                >
                  <>
                    <img src={twitter} alt="twitter" />
                  </>
                </a>
              </p>
            </div>
            <div>
              <p className="text-mainBlack p-2">
                <a
                  href="https://www.facebook.com/Credenceapphq?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noreferrer"
                  className="text-mainBlack"
                >
                  <FaFacebookF />
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* menus */}

        <div className=" menu1 ">
          <div className="my-3 font-bold">Features</div>
          <p className="my-2">Escrow</p>
          <p className="my-2">Access to capital</p>
          <p className="my-2">Marketplace</p>
        </div>
        <div className=" menu1 ">
          <div className="font-['public_sans'] font-bold my-3">Company</div>
          <p className="font-['roboto'] my-2 ">
            <Link to="/#faqs" className="text-black no-underline">
              FAQs
            </Link>
          </p>
          <p className="font-['roboto'] my-2 text-black">
            <Link
              to="http://medium.com/@Credenceapp"
              target="_blank"
              rel="noreferrer"
              className="text-black no-underline"
            >
              Blogs
            </Link>
          </p>
        </div>
        <div className=" menu1 ">
          <div className="font-['public_sans'] font-bold my-3">Legal</div>
          <p className="my-2">
            <Link to="/terms" className="text-black no-underline">
              Terms of service
            </Link>
          </p>
          <p className="my-2">
            <Link to="/policy" className="text-black no-underline">
              Privacy policy
            </Link>
          </p>
        </div>
        <div className="menu1">
          <div className="font-['public_sans'] font-bold my-3">Contact</div>
          <div className="flex space-x-2 my-2">
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <p className="text-justify footer_email text-sm">
              support@credenceapp.co
            </p>
          </div>
          <div className="flex space-x-2 my-2">
            <span>
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <a
              href="tel:+2347082748826"
              className="text-mainBlack no-underline"
            >
              +234 708 274 8826
            </a>
          </div>
        </div>
        {/* end of */}
      </div>
      <hr className="my-3" />
      <div className="text-center mt-9 mx-auto">
        <p>
          <span>&#169;</span> 2024 CredenceApp Africa Limited.All rights
          reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
