import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "redux/slices/authUser";
import logo from "../assets/new_logo.svg";
import { AiOutlineLoading3Quarters } from "react-icons/ai";


const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const successMsg = (msg) => {
    toast.success(msg);
  };

  const errorMsg = (msg) => {
    toast.error(msg);
  };

  const onSubmit = (data) => {
    setIsLoading(true);
    dispatch(forgotPassword(data)).then((res) => {
      if (res?.meta?.requestStatus === "fulfilled") {
        successMsg("Success!!! Check your email to continue process");
        setTimeout(() => {
          navigate("/auth/login");
        }, 3000);
      } else if (res?.error?.message) {
        errorMsg(`Password reset failed!!! Try again`);
      }
    });
    setIsLoading(false);
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
        <h1 className="loginHead">Forgot Password</h1>
        <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="input">
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="errMsg">
                enter valid email <address></address>
              </span>
            )}
          </div>
          <button type="submit" className="btns btnn">
            {isLoading ? <AiOutlineLoading3Quarters className="animate-spin mx-auto" /> : "Submit"}
          </button>
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
};

export default ForgotPassword;
