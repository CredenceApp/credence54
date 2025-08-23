import {
  faAngleDoubleRight,
  faCartPlus,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare, faEdit } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import BuyerorSeller from "./modalComponents/steps/buyerORseller";
import Details from "./modalComponents/steps/Details";
import TransactionSummary from "./modalComponents/steps/summary";
import "react-toastify/dist/ReactToastify.css";
import useFormData from "../sharedData";
import ResponsePage from "./modalComponents/responsePage";
import { Modal } from "react-bootstrap";

function FormModal({ onClose, props, show }) {
  var [step, setStep] = useState(1);
  let icons = [faAngleDoubleRight, faAngleDoubleRight, faEdit]; // array of icons
  const [imageUploads, setImageUploads] = useState([]);
  const { formData, setFormdata } = useFormData();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [topLevelProperty, nestedProperty] = name.split(".");

      setFormdata((prevData) => ({
        ...prevData,
        [topLevelProperty]: {
          ...prevData[topLevelProperty],
          [nestedProperty]: value,
        },
      }));
    } else {
      setFormdata((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("overlay_blur")) {
      onClose();
    }
  };

  const onNext = () => {
    setStep((prevstate) => prevstate + 1);
  };

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onClose}
    >
      {/* <div className="w-full overflow-y-auto mt-[3rem] md:mt-0 lg:w-3/4 bg-white rounded-2xl p-3"> */}
      <Modal.Header>
        <div className="headd">
          <h1 className="text-base font-semibold md:text-2xl">
            Create Escrow Transaction
          </h1>
          {/* THE ICONS FOR THE TRANSACTION PAGES */}
          <div className="icon_dashed">
            <div className="icon-container">
              <div className="icon">
                <div
                  // onClick={() => setStep(1)}
                  className={`icon ${
                    step >= 1 ? "activeMode" : "deactivemode"
                  }`}
                >
                  <FontAwesomeIcon
                    color={step >= 1 ? "#007538" : ""}
                    icon={faCartPlus}
                    src="tracking-icon-1.png"
                    alt="icon-1"
                  />
                </div>
                <p className={step >= 1 ? "textActive" : "textDeactive"}>
                  Details
                </p>
              </div>
              <div className="icon">
                <div
                  className={`icon ${
                    step >= 2 ? "activeMode" : "deactivemode"
                  }`}
                >
                  <FontAwesomeIcon
                    color={step >= 2 ? "#007538" : ""}
                    icon={faUserPlus}
                    src="tracking-icon-2.png"
                    alt="icon-2"
                  />
                </div>
                <p className={step >= 2 ? "textActive" : "textDeactive"}>
                  Buyer/Seller
                </p>
              </div>
              <div className="icon">
                <div
                  className={`icon ${
                    step >= 3 ? "activeMode" : "deactivemode"
                  }`}
                >
                  <FontAwesomeIcon
                    color={step >= 3 ? "#007538" : ""}
                    icon={faCheckSquare}
                    src="tracking-icon-3.png"
                    alt="icon-3"
                  />
                </div>
                <p className={step >= 3 ? "textActive" : "textDeactive"}>
                  Summary
                </p>
              </div>
            </div>
          </div>
          <span id="cancelBtn" onClick={onClose}>
            X
          </span>
        </div>
      </Modal.Header>
      <Modal.Body>
        {step === 1 && (
          <Details
            onNext={onNext}
            formData={formData}
            onInputChange={handleInputChange}
          />
        )}
        {step === 2 && (
          <BuyerorSeller
            formData={formData}
            onNext={onNext}
            onInputChange={handleInputChange}
          />
        )}
        {step === 3 && (
          <TransactionSummary
            onNext={onNext}
            formData={formData}
            closeModal={onClose}
          />
        )}
        {step === 4 && <ResponsePage formData={formData} />}
      </Modal.Body>
      {/* </div> */}
      {/* // <div className="overlay"></div> */}
    </Modal>
  );
}

export default FormModal;
