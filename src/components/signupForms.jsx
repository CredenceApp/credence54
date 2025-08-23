import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { signupUser } from "redux/slices/authUser";
import logo from "../assets/new_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineLoading3Quarters } from "react-icons/ai";


const myImage = require("../assets/Frame 58.png");

// const myImage = require('../assets/Frame 58.png');
const Logo = require("../assets/Union.png");

function Signupforms() {
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleVisibility = (e) => {
    e.preventDefault();
    setVisible(!visible);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const successMsg = (msg) => {
    toast.success(msg);
  };

  const errorMsg = (msg) => {
    toast.error(msg);
  };

  const onSubmit = async (data, e) => {
    e.preventDefault();
    // console.log('mail', data?.email);
    setIsLoading(true);
    await dispatch(signupUser(data)).then((result) => {
      if (result?.meta?.requestStatus === "fulfilled") {
        successMsg(`Account created successfully`);
        setTimeout(() => {
          navigate("/auth/confirm", { state: data.email });
        }, 3000);
      } else if (result?.meta?.requestStatus === "rejected") {
        errorMsg(`Error Creating account. Check your credentials`);
      }
    });
    setIsLoading(false);
  };

  return (
    <main className="formsNbrandDiv">
      <div className="brand">
        <Link to="/">
          <>
            <img className="w-[465px] h-[251px]" src={logo} alt="brandLogo" />
          </>
        </Link>
      </div>
      <div className="login -translate-y-[100px]">
        <h1 className="loginHead">Create Account</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input">
            <input
              type="text"
              id="firstname"
              placeholder="Enter your first name..."
              {...register("firstName", { required: true, minLength: 3 })}
            />
            {errors.firstName && (
              <span className="errMsg">Should be at least 3 characters</span>
            )}
          </div>
          <div className="input">
            <input
              type="text"
              id="lastName"
              placeholder="Enter your last name..."
              {...register("lastName", { required: true, minLength: 3 })}
            />
            {errors.lastName && (
              <span className="errMsg">Should be at least 3 characters</span>
            )}
          </div>
          <div className="input">
            <input
              type="email"
              placeholder="Enter your email address..."
              id="email"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="errMsg">email is required</span>}
          </div>
          <div className="flex items-center">
            <input
              type={visible ? "text" : "password"}
              className="h-[2.5rem] w-full rounded-lg border-[1.8px] border-borderGrey p-2 bg-inputBg"
              id="password"
              placeholder="Password"
              {...register("password", { required: true, minLength: 8 })}
            />
            <span className="absolute right-8" onClick={toggleVisibility}>
              <FontAwesomeIcon icon={visible ? faEye : faEyeSlash} />
            </span>
          </div>
          {errors.password && (
            <span className="errMsg">
              password should be at least 8 characters long
            </span>
          )}
          {/* <div className="flex items-center">
            <input
              type={visible ? "text" : "password"}
              className="h-[2.5rem] w-full rounded-lg border-[1.8px] border-borderGrey p-2 bg-inputBg"
              id="confirm-password"
              placeholder="Confirm Password"
              {...{ required: true, validate: (value) => value === password }}
            />
            <span className="absolute right-8" onClick={toggleVisibility}>
              <FontAwesomeIcon icon={visible ? faEye : faEyeSlash} />
            </span>
          </div>
          {errors.confirmPassword && (
            <span className="errMsg">password does not match</span>
          )} */}
          <button type="submit" className="btns">
            {isLoading ? <AiOutlineLoading3Quarters className="animate-spin mx-auto" /> : "Create Account"}
          </button>
          <div className="terms_condition">
            <input
              type="checkbox"
              id="terms"
              {...register("TandC", {
                required: true,
              })}
            />
            <span id="termsP">
              “I agree to Credence{" "}
              <NavLink to="/terms">Terms & Conditions</NavLink>"
            </span>
            {errors.terms && (
              <span className="errMsg">
                Acccept the terms and Conditions to complter registration
              </span>
            )}
          </div>
        </form>
      </div>
      <p className="-translate-y-[70px] text-black lg:-translate-y-[50px]">
        <span className="signup-bottom-text">Already have an account?</span>{" "}
        <Link to="/auth/login" className="nxtpageLinkers text-black">
          Sign in
        </Link>
      </p>
      <ToastContainer />
    </main>
  );
}

export default Signupforms;
