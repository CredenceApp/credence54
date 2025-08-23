import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { loginUser } from "redux/slices/authUser";
import logo from "../assets/new_logo.svg";
import { AiOutlineLoading3Quarters } from "react-icons/ai";


function LoginForms() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const successMsg = (msg) => {
    toast(msg);
  };

  const errorMsg = (msg) => {
    toast.error(msg);
  };

  const onSubmit = async (data, e) => {
    e.preventDefault();
    // console.log(data);
    setIsLoading(true);
    await dispatch(loginUser(data)).then((result) => {
      // console.log("result_login is: ", result);
      if (result?.meta?.requestStatus === "fulfilled") {
        successMsg(`Login Successful`);
        navigate("/user/dashboard");
      } else if (
        result?.error?.message === "Request failed with status code 400"
      ) {
        errorMsg(`User not found`);
      } else if (result?.error) {
        errorMsg(`Error logging in. try again!!!!`);
      }
    });
    setIsLoading(false);
  };
  //PASSWORD ICON
  const [visible, setVisible] = useState(false);
  const toggleVisibility = (e) => {
    e.preventDefault();
    setVisible(!visible);
  };
  
  return (
    <main className="formsNbrandDiv">
      {/* {localStorage.getItem('token')?<, useNavigate to={'/admin/dashboard'} />:null} */}
      <Link to="/">
        <>
          <img className="w-[465px] h-[251px]" src={logo} alt="brandLogo" />
        </>
      </Link>
      <div className="login sigh -translate-y-[100px]">
        <h1 className="loginHead">Welcome Back!</h1>
        <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="input">
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="errMsg">enter valid email address</span>
            )}
          </div>
          <div className="flex items-center">
            <input
              className="h-[2.5rem] w-full rounded-lg border-[1.8px] border-borderGrey p-2 bg-inputBg"
              type={visible ? "text" : "password"}
              placeholder="Password"
              name="password"
              //remember to authenticate after pulling form api instaead of using the regex pattern
              {...register("password", { required: true })}
            />
            <span className="absolute right-8" onClick={toggleVisibility}>
              <FontAwesomeIcon icon={visible ? faEye : faEyeSlash} />
            </span>
          </div>
          <button type="submit" className="btns btnn">
            {isLoading ? <AiOutlineLoading3Quarters className="animate-spin mx-auto" /> : "Sign in"}
          </button>
          <div className="terms_condition">
            <NavLink to="/auth/forgot-password">Forgot password?</NavLink>
            {errors.terms && (
              <span className="errMsg">Acccept the terms and Conditions</span>
            )}
          </div>
        </form>
      </div>
      <p>
        <span className="logincardbottomprompt">Don't have account?</span>{" "}
        <Link to="/auth/signup" className="nxtpageLinkers">
          Create account
        </Link>
      </p>
      <ToastContainer />
    </main>
  );
}

export default LoginForms;
