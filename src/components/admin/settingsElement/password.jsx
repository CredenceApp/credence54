import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { changePassword } from "redux/slices/settings";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function PasswordSet() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true);
    try {
      dispatch(changePassword(data));
      toast.success("Password changed successfully!");
    } catch (error) {
      toast.error(error?.message || "Error changing password");
    }
    setIsLoading(false);
  };

  const toggleVisibility = (e) => {
    e.preventDefault();
    setVisible(!visible);
  };

  return (
    <div className="passwordsettings">
      <ToastContainer />
      <h3>Change Password</h3>
      <div className="passwordElemenet">
        <form className="profileform" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <label htmlFor="Oldpassword">Input new password</label>
            <input
              type={visible ? "text" : "password"}
              className="h-[2.5rem] w-full md:w-[22.25rem] rounded-lg border-[1.8px] border-borderGrey p-2 bg-inputBg"
              placeholder="**************"
              {...register("password", { required: true })}
            />
          </div>

          <button disabled={isLoading} className="btns profilebtns btnn">
            {isLoading ? "Change password" : "Changing password"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default PasswordSet;
