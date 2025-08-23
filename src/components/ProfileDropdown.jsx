import { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { logoutUser } from "redux/slices/authUser";
import { LuLogOut } from "react-icons/lu";
import { setUser } from "redux/slices/authUser";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function ProfileDropdown() {
  const dispatch = useDispatch();
  const user =  useSelector((state) => state?.user?.user?.user);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user data is stored in localStorage on component mount
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      dispatch(setUser(user)); // Dispatch setUser action with the stored user data
    }
  }, []);

  const handleLogout = async () => {
    // localStorage.removeItem("token");
    try {
      dispatch(logoutUser());
      navigate("/auth/login");
    } catch (error) {
      // console.log(error);
    }
  };


  return (
    <>
      <div className="absolute top-14 sm:right-2 z-50 bg-white rounded-[8px] py-[14px] px-[16px] shadow-md w-[13.875rem] ">
        <div className="flex items-center gap-[12px] pb-2 border-b border-b-neautral30">
          <div className="img w-[40px] h-[40px] rounded-[16px] bg-primary95 overflow-hidden">
            <img className="w-full" src="" alt="" />
          </div>
          <h3 className="text-[16px] leading-[24px] font-medium text-neautral30">{user?.firstName}</h3>
        </div>
        {/* <ul className="mt-2 border-4 border-newCredenceGreen"> */}
          <li className="flex mt-2 items-center gap-[8px] text-[16px] leading-[24px] text-neautral30">
            <span>
              <IoSettingsOutline />
            </span>
            <Link to='/user/settings/profile' className="text-black no-underline">Settings</Link>
          </li>
          {/* <li className="flex items-center gap-[8px] justify-center my-3 text-[16px] leading-[24px] text-neautral30">
            <span>
              <TfiHeadphoneAlt />
            </span>
            <span>Contact us</span>
          </li> */}
          <li className="flex items-center gap-[8px] mt-2 text-[16px] leading-[24px] text-errorMain" onClick={handleLogout}>
            <span>
              <LuLogOut />
            </span>
            <span>Logout</span>
          </li>
        {/* </ul> */}
      </div>
    </>
  );
}

export default ProfileDropdown;
