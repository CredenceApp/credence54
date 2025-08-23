import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "redux/slices/settings";
import { setCredentials } from "context/authSlice";
import placeholderImg from "../../../assets/profile_avatar.jpeg";
import { IoCameraSharp } from "react-icons/io5";


import "react-toastify/dist/ReactToastify.css";

function ProfileSet() {
  const { register, handleSubmit, watch, setValue } = useForm();
  const [imageUpload, setImageUpload] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.user?.user);

  const onSubmit = async (data) => {
    data.imageUpload = imageUpload;
    setIsLoading(true);
    try {
      dispatch(updateProfile(data));
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error(error.data.message || error.error);
    }
    setIsLoading(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) {
      toast.error("No file selected");
      return;
    }
    const fileType = file.type;
    const validImageTypes = ["image/jpeg", "image/png", "image/gif"];

    if (!validImageTypes.includes(fileType)) {
      toast.error("Enter a valid image format");
      return;
    }

    setImageUpload(URL.createObjectURL(file));

  };

  return (
    <div className="profile">
      <h3 className="text-xl text-editProColor font-medium">Edit Profile</h3>
      <div className="profileElemenet">
        <p>Profile photo</p>
        <div className="detailsss addimagediv">
          <div className="addedimage">
            <label htmlFor="file-input" className="w-[5rem] h-[5rem] relative">
              <span className="cursor-pointer absolute -right-4 top-2">
                <IoCameraSharp size={20} />
              </span>
              <img
                className="w-[5rem] h-[5rem] rounded-xl"
                src={imageUpload || placeholderImg}
                alt="profile img"
              />
              <input
                type="file"
                className="input_file hidden"
                id="file-input"
                accept="image/*"
                typeof="image/*"
                onChange={handleImageUpload}
              />
            </label>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 mt-10"
        >
          <div className="grid gap-3 md:w-[22.25rem]">
            <label htmlFor="Name">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="bg-[#f5fff2] rounded-lg p-2 border-[1.8px] border-borderGrey"
              defaultValue={user?.firstName}
              {...register("firstName")}
            />
          </div>
          <div className="grid gap-3 md:w-[22.25rem]">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="bg-[#f5fff2] rounded-lg p-2 border-[1.8px] border-borderGrey"
              defaultValue={user?.lastName}
              {...register("lastName")}
            />
          </div>
          <div className="grid gap-3 md:w-[22.25rem]">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-[#f5fff2] rounded-lg p-2 border-[1.8px] border-borderGrey"
              defaultValue={user?.email}
              {...register("email")}
            />
          </div>
          {/* <div className="input">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              id="phone"
              name="phone"
              {...register("phone")}
            />
          </div>
          <div className="input">
            <label htmlFor="phone">NIN</label>
            <input type="number" id="nin" name="nin" {...register("nin")} />
          </div> */}
          <div className="grid gap-3 md:w-[22.25rem]">
            <label htmlFor="profession">State</label>
            <input
              type="number"
              id="profession"
              {...register("state")}
              className="bg-[#f5fff2] rounded-lg p-2 border-[1.8px] border-borderGrey"
            />
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="bg-editProColor text-white w-[8.75rem] border-none rounded-lg py-2 px-4"
          >
            {isLoading ? "Updating..." : "Update"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ProfileSet;
