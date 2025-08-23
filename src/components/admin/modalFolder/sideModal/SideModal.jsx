import { Button, Offcanvas } from "react-bootstrap";
import { GrClose } from "react-icons/gr";
import { fulfilOrder } from "redux/slices/marketplace";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import SuccessModal from "../successModal/SuccessModal";
import { useState } from "react";

const SideModal = ({ show, hide, rowData }) => {
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.user?.user);

  const successMsg = (msg) => {
    toast(msg);
  };

  const errorMsg = (msg) => {
    toast.error(msg);
  };

  console.log("data", rowData);

  const handleFulfilOrder = async (id) => {
    try {
      dispatch(fulfilOrder(id)).then((res) => {
        // console.log(res);
        if (!user?.isSeller) {
          errorMsg(
            "You have to become a seller to fulfil an order on the market place"
          );
        } else {
          setSuccess(true);
          successMsg(
            "Your request to fulfil this order has been submitted successfully! Our team will reach out to you shortly "
          );
        }
      });
    } catch (error) {
      errorMsg(
        error.message ||
          "Cannot Fulfil order, you have to become a seller to fulfil order"
      );
    }
  };

  return (
    <>
      <Offcanvas show={show} onHide={hide} placement="end">
        <Offcanvas.Header
          className="flex justify-between items-center"
          responsive="xxl"
        >
          <Offcanvas.Title>
            Commodity requested by {rowData?.buyerName}
          </Offcanvas.Title>
          <span className="cursor-pointer" onClick={hide}>
            <GrClose />
          </span>
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-lightGreen p-3">
          <div className="bg-white">
            <div className="border-b border-b-credenceGreen p-2">
              <h2 className="text-base md:text-2xl text-credenceGreen leading-10">
                Commodity Details
              </h2>
            </div>
            <div className="mt-2 md:mt-4 mb-2 p-2">
              <h2 className="text-modalGreyText text-base md:text-xl leading-8 font-bold">
                Commodity Name
              </h2>
              <p className="text-smallGreyText text-xs md:text-base leading-8 font-normal">
                {rowData?.commodityName?.join(", ")}
              </p>
            </div>
            <div className="mt-2 md:mt-4 mb-2 p-2">
              <h2 className="text-modalGreyText text-base md:text-xl leading-8 font-bold">
                Commodity Specification
              </h2>
              <p className="text-smallGreyText text-xs md:text-base leading-8 font-normal">
                {rowData?.specification}
              </p>
            </div>
            <div className="mt-2 md:mt-4 mb-2 p-2">
              <h2 className="text-modalGreyText text-base md:text-xl leading-8 font-bold">
                Delivery State
              </h2>
              <p className="text-smallGreyText text-xs md:text-base leading-8 font-normal">
                {rowData?.deliveryState}
              </p>
            </div>
            <div className="mt-2 md:mt-4 mb-2 p-2">
              <h2 className="text-modalGreyText text-base md:text-xl leading-8 font-bold">
                Commodity Quantity
              </h2>
              <p className="text-smallGreyText text-xs md:text-base leading-8 font-normal">
                {rowData?.quantity}
              </p>
            </div>
            <div className="mt-2 md:mt-4 mb-2 p-2">
              <h2 className="text-modalGreyText text-base md:text-xl leading-8 font-bold">
                Payment Terms
              </h2>
              <p className="text-smallGreyText text-xs md:text-base leading-8 font-normal">
                {rowData?.payment}
              </p>
            </div>
            <div className="mt-2 md:mt-4 mb-2 p-2">
              <h2 className="text-modalGreyText text-base md:text-xl leading-8 font-bold">
                Target Price
              </h2>
              <p className="text-smallGreyText text-xs md:text-base leading-8 font-normal">
                {rowData?.price.toLocaleString()}
              </p>
            </div>
          </div>
          {rowData?.status !== "completed" && (
            <div className="w-full flex justify-center">
              <button
                className="bg-credenceGreen text-white rounded-lg px-6 py-2 border-none"
                onClick={() => handleFulfilOrder(rowData?._id)}
                disabled={rowData?.status === "in-progress" || rowData?.status === "completed"}
              >
                Fulfill Order
              </button>
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
      <ToastContainer />
      <SuccessModal
        text="Congratulations! Your request has been received. We will inform you about the progress of the trade."
        show={success}
        hide={() => setSuccess(false)}
      />
    </>
  );
};

export default SideModal;
