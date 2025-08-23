import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { confirmEmail } from "redux/slices/authUser";
import logo from "../assets/new_logo.svg";
import { useForm } from "react-hook-form";



function ConfirmForm() {
  const location = useLocation();
  const userEmail = location.state
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const successMsg = (msg) => {
    toast.success(msg);
  };

  const errorMsg = (msg) => {
    toast.error(msg);
  };

  const submitOtp = async (data) => {
    const formData = {
      ...data,
      email: userEmail,
    };
  
    await dispatch(confirmEmail(formData)).then((res) => {
      // console.log('details: ', formData);
      // console.log('emailConfirm: ', res);
      if (res?.meta?.requestStatus === "fulfilled") {
        successMsg(`Email confirmation successful`);
        navigate("/auth/login");
      } else if (res?.meta?.requestStatus === "rejected") {
        // console.log(res);
        errorMsg(`invalid token!!! Enter the correct token`);
      }
    })
  };

  return (
    <main className="formsNbrandDiv">
      <div className="brand">
        <Link to="/">
          <img className="w-[465px] h-[251px]" src={logo} alt="brandLogo" />
        </Link>
      </div>
      <div className="login sigh -translate-y-[100px]">
        <h1 className="loginHead">Welcome to Credence!</h1>
        <p>Please enter the verification code sent to your email</p>
        <form className="loginForm" onSubmit={handleSubmit(submitOtp)}>
          <input
            name="otp"
            required
            type="text"
            className="code_input"
            maxLength={6}
            {...register("token", { required: true })}
          />
          {errors.token && (
            <span className="errMsg">token is required</span>
          )}
           <button className={`${loading && 'animate-pulse'} btns`} type="submit">
            {loading ? "Submitting" : "Submit"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </main>
  );
}

export default ConfirmForm;
