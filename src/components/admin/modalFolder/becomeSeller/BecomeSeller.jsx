import { useState } from "react";
import { becomeSeller } from "redux/slices/marketplace";
import Button from "landing-page/custom-components/Button";
import { GrClose } from "react-icons/gr";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Modal } from "react-bootstrap";
import SuccessModal from "../successModal/SuccessModal";
import naijaStates from "naija-state-local-government";
import { CiCircleInfo } from "react-icons/ci";

import "react-toastify/dist/ReactToastify.css";

const BecomeSeller = ({ show, hide, props }) => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const commodities = [
    "Grains",
    "Ginger",
    "Cashew nuts",
    "Tomatoe",
    "Cassava",
    "Cocoa",
    "Honey",
    "Seaseme seeds",
    "Yam",
  ];

  const overlayClose = (e) => {
    if (e.target.classList.contains("overlay_blur")) {
      hide();
    }
  };

  const msgOk = (msg) => {
    toast.success(msg);
  };

  const msgerror = (msg) => {
    toast.error(msg);
  };

  const submitForm = async (data, e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();

    formData.append("company", data.company);
    formData.append("warehouseAvailable", data.warehouseAvailable);
    formData.append("commodities", data.commodities);
    formData.append("warehouseNumber", data.warehouseNumber);
    formData.append("warehouseLocation", data.warehouseLocation);
    formData.append("location", data.location);

    // Append selected files
    const fileInput = document.getElementById("cac");
    for (let i = 0; i < fileInput.files.length; i++) {
      formData.append("documents", fileInput.files[i]);
    }

    await dispatch(becomeSeller(data)).then((res) => {
      if (res?.meta?.requestStatus === "fulfilled") {
        msgOk(
          `Successfull!!! You will be notified when there is a match for you.`
        );
        setSuccess(true);
      } else if (
        res?.error?.message === "Request failed with status code 400"
      ) {
        msgerror(`Check your details and try again`);
      } else if (res?.error) {
        msgerror(`Request not submitted`);
      }
    });
    setLoading(false);
  };

  if (!show) return null;

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={hide}
      >
        <Modal.Header>
          <h2 className="text-xl font-bold mx-auto">Become a Seller</h2>
          <span
            className="border-2 p-1 cursor-pointer text-xl rounded-md"
            onClick={hide}
          >
            <GrClose />
          </span>
        </Modal.Header>
        <Modal.Body>
          <form
            className="flex flex-col md:grid md:grid-cols-2 gap-3 w-full"
            onSubmit={handleSubmit(submitForm)}
          >
            <div className="">
              <label htmlFor="company" className="block">
                Trading Company*
              </label>
              <input
                type="text"
                id="company"
                placeholder="Tell us your company name"
                required
                {...register("company")}
                className="border-2 border-neutralGrey rounded-lg p-2 block form_fields w-full"
              />
            </div>
            <div>
              <label htmlFor="warehouse" className="block">
                Do you have a Warehouse?
              </label>
              <select
                name=""
                id="warehouse"
                {...register("warehouseAvailable")}
                className="border-2 border-neutralGrey rounded-lg p-2 block w-full"
              >
                <option value="" selected disabled>
                  Select
                </option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
            <div className="grid">
              <div className="flex gap-2 items-center">
                <label htmlFor="commodities" className="block">
                  Commodities Traded*
                </label>
                <span
                  className="text-neutralGrey cursor-pointer font-semibold"
                  title="List as many commodities you trade"
                >
                  <CiCircleInfo />
                </span>
              </div>
              <input
                type="text"
                id="warehouse_number"
                placeholder="e.g Rice, Maize, Ginger, Cashew Nut, Hibiscus"
                className="border-2 border-neutralGrey rounded-lg p-2"
                {...register("commodities")}
              />
            </div>
            <div className="grid">
              <label htmlFor="warehouse_number">
                How many warehouse(s) do you have
              </label>
              <input
                type="number"
                id="warehouse_number"
                className="border-2 border-neutralGrey rounded-lg p-2"
                {...register("warehouseNumber")}
              />
            </div>
            <div className="grid">
              <label htmlFor="phone_number">Phone Number</label>
              <input
                type="text"
                id="phone_number"
                placeholder="+234 123456789"
                className="border-2 border-neutralGrey rounded-lg p-2"
                required
                {...register("phone_number")}
              />
            </div>
            <div className="grid">
              <label htmlFor="warehouse_location">Warehouse Location(s)</label>
              <input
                type="text"
                id="warehouse_location"
                placeholder="warehouse address"
                className="border-2 border-neutralGrey rounded-lg p-2"
                required
                {...register("warehouseLocation")}
              />
              {/* <select
                id="state"
                className="border-2 border-neutralGrey rounded-lg p-2 block form_fields w-full"
                {...register("warehouseLocation")}
                required
              >
                <option value="">Select a State</option>
                {naijaStates.states()?.map((mappedStates, index) => (
                  <option key={index} value={mappedStates}>
                    {mappedStates}
                  </option>
                ))}
              </select> */}
            </div>
            <div className="grid">
              <label htmlFor="location">Location*</label>
              <select
                id="state"
                className="border-2 border-neutralGrey rounded-lg p-2 block form_fields w-full"
                {...register("location")}
                required
              >
                <option value="">Select a State</option>
                {naijaStates.states()?.map((mappedStates, index) => (
                  <option key={index} value={mappedStates}>
                    {mappedStates}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid">
              <div className="flex gap-2 items-center">
                <label htmlFor="cac">
                  Provide supporting documents (optional)
                </label>
                <span
                  className="text-neutralGrey cursor-pointer font-semibold"
                  title="Phytosanitary certificates, commodity certification etc"
                >
                  <CiCircleInfo />
                </span>
              </div>

              <input
                type="file"
                id="cac"
                placeholder="CAC Certificate, Commodity certifications..."
                className="border-2 border-neutralGrey rounded-lg p-2"
              />
            </div>
            <div className="col-span-2 text-center mt-5">
              <Button
                text={loading ? "Sumitting" : "Submit"}
                type="submit"
                className="bg-credenceGreen text-white rounded-md w-full md:w-[335px] px-6 py-2"
              />
            </div>
          </form>
        </Modal.Body>
      </Modal>
      <ToastContainer />
      {success && (
        <SuccessModal
          show={success}
          hide={() => setSuccess(false)}
          text={"You will be notified about the progress of the trade"}
        />
      )}
    </>
  );
};

export default BecomeSeller;
