import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  acceptTransaction,
  getPendingTransaction,
  rejectTransaction,
  initiateBilling,
} from "redux/slices/transactions";
import { GrClose } from "react-icons/gr";
import { IoIosClose } from "react-icons/io";
import { MdArrowRightAlt } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { Modal } from "react-bootstrap";
import { TbCurrencyNaira } from "react-icons/tb";


function PendingModal({ show, hide, props }) {
  const [reference, setReference] = useState("");

  const dispatch = useDispatch();
  const pending = useSelector(
    (state) => state?.transaction?.transaction?.pendingTransactions
  );

  useEffect(() => {
    const pendingTransactions = async () => {
      await dispatch(getPendingTransaction()).then((res) => {
        // console.log("pendingTs", res?.payload?.pendingTransactions);
      });
    };

    pendingTransactions();
  }, []);

  const successMsg = (msg) => {
    toast(msg);
  };

  const errorMsg = (msg) => {
    toast.error(msg);
  };

  const acceptTrade = (id) => {
    dispatch(acceptTransaction(id)).then((res) => {
      if (res?.meta?.requestStatus === "fulfilled") {
        successMsg(`Transaction Accepted`);
        dispatch(getPendingTransaction());
      } else if (res?.meta?.requestStatus === "rejected") {
        errorMsg(`Error accepting transaction`);
      }
    });
  };

  const declineTrade = (id) => {
    dispatch(rejectTransaction(id)).then((res) => {
      if (res?.meta?.requestStatus === "fulfilled") {
        successMsg(`You have declined this transaction`);
        dispatch(getPendingTransaction());
      } else if (res?.meta?.requestStatus === "rejected") {
        errorMsg(`Error declining transaction`);
      }
    });
  };

  const startBilling = async () => {
    dispatch(initiateBilling()).then((res) => {
      // console.log('paystack-url', res?.payload?.response?.authorization_url);
      setReference(res?.data?.data?.data?.reference || "");
      const link = res?.payload?.response?.authorization_url;
      if (link) {
        window.open(link, "_blank");
      } else {
      }
    });
  };

  // const startBilling = async () => {
  //   dispatch(initiateBilling()).then((res) => {
  //     setReference(res?.data?.data?.data?.reference || "");
  //     const link = res?.payload?.response?.authorization_url;
  //     if (link) {
  //       // Open Paystack payment page in a new tab
  //       const paystackWindow = window.open(link, "_blank");

  //       // Listen for messages from Paystack window
  //       window.addEventListener("message", (event) => {
  //         // Check if message is from Paystack and payment is successful
  //         if (
  //           event.origin === "https://checkout.paystack.com" &&
  //           event.data === "success"
  //         ) {
  //           // Redirect to dashboard after successful payment
  //           window.location.href = "admin/dashboard";
  //         }
  //       });

  //       // Close Paystack window when it's closed
  //       const checkWindowClosed = setInterval(() => {
  //         if (paystackWindow.closed) {
  //           clearInterval(checkWindowClosed);
  //           window.location.href = "admin/dashboard";
  //         }
  //       }, 1000);
  //     } else {
  //       console.error("Authorization URL not found in the PAYSTACK response.");
  //     }
  //   });
  // };

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
          <h2 className="text-xl font-bold mx-auto">Pending Transactions</h2>
          <span
            className="border-2 p-1 cursor-pointer text-xl rounded-md"
            onClick={hide}
          >
            <GrClose />
          </span>
        </Modal.Header>
        <Modal.Body>
          {pending?.map((list, index) => (
            <div key={index} className="">
              <div className="mt-8 border-b border-b-neutral-300 p-2 flex flex-col gap-5 2xl:flex-row">
                <div>
                  <p>
                    <span className="font-bold">Commodity Name:</span>{" "}
                    <span className="capitalize text-neutral-500">
                      {list?.commodityName}
                    </span>
                  </p>
                  <p>
                    <span className="font-bold">Price:</span>{" "}
                    <span className="capitalize text-neutral-500 flex gap-2 items-center">
                      <span><TbCurrencyNaira /></span>
                      <span>{list?.price.toLocaleString()}</span>
                    </span>
                  </p>
                  <p>
                    <span className="font-bold">Commodity Specification:</span>{" "}
                    <span className="capitalize text-neutral-500">
                      {list?.commodityDescription}
                    </span>
                  </p>
                  <p>
                    <span className="font-bold">Seller Name:</span>{" "}
                    <span className="capitalize text-neutral-500">
                      {list?.sellerName}
                    </span>
                  </p>
                  <p>
                    <span className="font-bold">Shipping Method:</span>{" "}
                    <span className="capitalize text-neutral-500">
                      {list?.shippingMethod}
                    </span>
                  </p>
                  <p>
                    <span className="font-bold">Delivery Date</span>{" "}
                    <span className="capitalize text-neutral-500">
                      {list?.deliveryDate}
                    </span>
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 space-x-2">
                  <span
                    onClick={() => declineTrade(list?._id)}
                    className="cursor-pointer flex gap-2 items-center rounded-[15px] border-2 border-credenceGreen h-fit w-fit px-8 py-2 text-credenceGreen hover:bg-credenceOrange hover:text-white hover:border-none"
                  >
                    <span>Decline Trade</span>
                    <span className="text-2xl">
                      <IoIosClose />
                    </span>
                  </span>

                  <span
                    onClick={() => {
                      acceptTrade(list?._id, list?.price);
                      startBilling();
                    }}
                    className="cursor-pointer flex gap-2 items-center rounded-[15px] bg-credenceGreen h-fit w-fit px-8 py-2 text-white hover:bg-credenceOrange hover:text-white hover:border-none"
                  >
                    <span className="">Accept Trade</span>
                    <span className="text-2xl">
                      <MdArrowRightAlt />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default PendingModal;
