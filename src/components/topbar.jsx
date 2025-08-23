import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faBell } from "@fortawesome/free-regular-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../context/authSlice";
import { setUser } from "redux/slices/authUser";
import { FaUserCircle } from "react-icons/fa";
import ProfileDropdown from "./ProfileDropdown";
import logo from '../assets/new_logo.svg';

function TopBar(customStyle) {
  const [drop, setDrop] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      dispatch(logout());
      navigate("/auth/login");
    } catch (error) {
      // console.log(error);
    }
  };

  const handleDrop = () => {
    setDrop(!drop);
  };

  useEffect(() => {
    // Check if user data is stored in localStorage on component mount
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      dispatch(setUser(user)); 
      // console.log('user: ', user);
  
      // console.log('firstName:', user?.user?.firstName);
    }
  }, []);

  return (
    <div className={`TopBar ${location.pathname === '/accept' || location.pathname === '/decline' ? 'bg-materialLightGreen' : 'bg-materialWhite p-2 border-b border-b-credenceGreen'}`}>
      <div className={`searchDiv ${location.pathname === '/accept' || location.pathname === '/decline' ? 'hidden' : ''}`}>
        <input type="text" placeholder=" Search" />
      </div>
      {/* <div className={`${location.pathname === '/accept' && 'block'}`}> */}
        <img className={`w-24 h-24 ${location.pathname === '/accept' || location.pathname === '/decline' ? 'block' : 'hidden'}`} src={logo} alt="" />
      {/* </div> */}
      <div className="topRHS">
        <div className="topbarCTAs">
          <div className="topShape bg-materialLightGreen">
            {/* <span></span> */}
            <FontAwesomeIcon icon={faComments} size="lg" color="#007538" />
          </div>

          <div className="topShape">
            {/* <span></span> */}
            <FontAwesomeIcon icon={faBell} size="lg" color="#007538" />
          </div>
          <button className="w-[40px] h-[40px] bg-materialLightGreen rounded-[12px] flex justify-center items-center relative">
            <FaUserCircle
              className="text-[#007538] text-base"
              onClick={handleDrop}
            />
            {drop ? <ProfileDropdown /> : ""}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
