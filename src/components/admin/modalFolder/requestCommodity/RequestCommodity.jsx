import { useState } from "react";
import Button from "landing-page/custom-components/Button";
import { GrClose } from "react-icons/gr";
import { requestCommodity } from "redux/slices/marketplace";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Modal } from "react-bootstrap";
import naijaStates from "naija-state-local-government";
import { CiCircleInfo } from "react-icons/ci";
import { OverlayTrigger } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";
import SuccessModal from "../successModal/SuccessModal";

import "react-toastify/dist/ReactToastify.css";

const RequestCommodity = ({ show, hide, props }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();

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

    // Append form data
    formData.append("commodityName", data.commodityName);
    formData.append("deliveryState", data.deliveryState);
    formData.append("quantity", data.quantity);
    formData.append("deliveryAddress", data.deliveryAddress);
    formData.append("price", data.price);
    formData.append("requestSample", data.requestSample);
    formData.append("payment", data.payment);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("specification", data.specification);

    // Append selected files
    const fileInput = document.getElementById("support_doc");
    for (let i = 0; i < fileInput.files.length; i++) {
      formData.append("documents", fileInput.files[i]);
    }

    try {
      await dispatch(requestCommodity(data)).then((res) => {
        setTimeout(() => {
          msgOk(
            "Successful!!! You will be notified about the progress of the trade"
          );
        }, 3000);
        setSuccess(true);
        // hide();
      });
    } catch (error) {
      msgerror(error.message | "request could not be completed");
      // console.log("error", error);
    }
    setLoading(false);
    reset();
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <div className="">
        <h2 className="text-sm leading-6 font-semibold">
          Commodity Specifications
        </h2>
        <p className="text-left">Cashew:</p>
        <p className="text-left">Export Grade (48 KOR)</p>
        <p className="text-left">Mositure Content: 10 %</p>
        <p className="text-left">Priority on Wet Cashew</p>
        <p className="text-left">Nut count _ 190/200</p>
        <p className="text-left">Moisture _ 9%</p>
        <p className="text-left">Tonnage-1,000</p>
      </div>
    </Tooltip>
  );

  return (
    <>
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={hide}
      >
        <Modal.Header className="flex items-center justify-between">
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="text-xl font-bold mx-auto"
          >
            Request Commodity
          </Modal.Title>
          <span className="cursor-pointer" onClick={() => hide()}>
            <GrClose />
          </span>
        </Modal.Header>
        <Modal.Body>
          <div className="overflow-scroll">
            <form
              className="flex flex-col md:grid md:grid-cols-2 gap-3 w-full"
              onSubmit={handleSubmit(submitForm)}
            >
              <div className="">
                <label htmlFor="company" className="block">
                  Commodity name*
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="E.g Split Ginger, Lentils, paddy rice, Soyabeans etc"
                  className="border-2 border-neutralGrey rounded-lg p-2 block form_fields w-full"
                  required
                  {...register("commodityName")}
                />
              </div>
              <div className="">
                <label htmlFor="trading_company" className="block">
                  Trading company*
                </label>
                <input
                  type="text"
                  id="trading_company"
                  placeholder="Enter trading name or company name"
                  className="border-2 border-neutralGrey rounded-lg p-2 block form_fields w-full"
                  required
                  {...register("tradingCompany")}
                />
              </div>
              <div className="">
                <label htmlFor="state" className="block">
                  Delivery State*
                </label>
                <select
                  id="state"
                  className="border-2 border-neutralGrey rounded-lg p-2 block form_fields w-full"
                  {...register("deliveryState")}
                >
                  <option value="">Select a State</option>
                  {naijaStates.states()?.map((mappedStates, index) => (
                    <option key={index} value={mappedStates}>
                      {mappedStates}
                    </option>
                  ))}
                </select>
              </div>
              <div className="">
                <label htmlFor="quantity" className="block">
                  Commodity quantity* (/MT)
                </label>
                <input
                  type="number"
                  id="quantity"
                  placeholder="Quantity in Metric Ton"
                  className="border-2 border-neutralGrey rounded-lg p-2 block form_fields w-full"
                  required
                  {...register("quantity")}
                />
              </div>
              <div className="">
                <label htmlFor="address" className="block">
                  Delivery Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="border-2 border-neutralGrey rounded-lg p-2 block form_fields w-full"
                  required
                  {...register("deliveryAddress")}
                />
              </div>
              <div className="">
                <label htmlFor="target_price" className="block">
                  Target Price*
                </label>
                <input
                  type="number"
                  id="target_price"
                  placeholder="How much are you looking to buy / MT"
                  className="border-2 border-neutralGrey rounded-lg p-2 block form_fields w-full"
                  required
                  {...register("price")}
                />
              </div>
              <div className="">
                <div className="flex items-center gap-2">
                  <label htmlFor="sample" className="block">
                    Sample Preference
                  </label>
                  <span
                    className="text-neutralGrey cursor-pointer font-semibold"
                    title="Sample request incurs extra delivery cost"
                  >
                    <CiCircleInfo />
                  </span>
                </div>
                <select
                  id="sample"
                  className="border-2 border-neutralGrey rounded-lg p-2 block w-full"
                  required
                  defaultValue="Select an Option"
                  {...register("requestSample")}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>
              <div className="">
                <label htmlFor="payment_terms" className="block">
                  Payment Terms*
                </label>
                <select
                  id="payment_terms"
                  className="border-2 border-neutralGrey rounded-lg p-2 block w-full"
                  required
                  defaultValue="Select how you wan to pay"
                  {...register("payment")}
                >
                  <option value="" disabled>
                    Select how you wan to pay
                  </option>
                  <option value="Escrow">Escrow</option>
                  <option value="Advance Payment">Advance Payment</option>
                  <option value="Bank Guarantee">Bank Guarantee</option>
                </select>
              </div>
              <div className="">
                <label htmlFor="phone_number" className="block">Phone Number</label>
                <input
                  type="text"
                  id="phone_number"
                  placeholder="+234 123456789"
                  className="border-2 border-neutralGrey rounded-lg p-2 block form_fields w-full"
                  required
                  {...register("phoneNumber")}
                />
              </div>
              <div className="grid">
                <div className="flex gap-2 items-center">
                  <label htmlFor="support_doc">
                    Provide supporting documents (optional)
                  </label>
                  <span
                    className="text-neutralGrey cursor-pointer font-semibold"
                    title="Local Purchase Order(LPO), etc"
                  >
                    <CiCircleInfo />
                  </span>
                </div>
                <input
                  type="file"
                  id="support_doc"
                  placeholder="Purchase order, and any relevant document"
                  className="border-2 border-neutralGrey rounded-lg p-2"
                  // {...register("documents")}
                />
              </div>
              <div className="grid">
                <div className="flex items-center gap-2">
                  <label htmlFor="specification">Commodity Specification</label>
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <span className="text-neutralGrey cursor-pointer font-semibold">
                      <CiCircleInfo />
                    </span>
                  </OverlayTrigger>
                </div>
                <textarea
                  cols="20"
                  rows="5"
                  placeholder="E.g (Cashew: Export Grade (48 KOR) | Mositure Content: 10%"
                  id="specification"
                  className="border-2 border-neutralGrey rounded-lg p-2"
                  {...register("specification")}
                ></textarea>
              </div>
              <div className="col-span-2 text-center mt-5">
                <Button
                  text={loading ? "Requesting..." : "Submit"}
                  type="submit"
                  className="bg-credenceGreen text-white rounded-md w-full md:w-[335px] px-6 py-2"
                />
              </div>
            </form>
          </div>
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

export default RequestCommodity;
