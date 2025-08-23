import { Modal } from "react-bootstrap";
import { GrClose } from "react-icons/gr";
import checkxagon from "../../../../assets/checkxagon.svg";

const SuccessModal = ({ show, hide, props, text }) => {
  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        show={show}
        onHide={hide}
      >
        <Modal.Header className="flex justify-end">
          <span onClick={() => hide()}>
            <GrClose />
          </span>
        </Modal.Header>
        <Modal.Body>
          <div className="flex items-start gap-3">
            <img src={checkxagon} alt="check-icon" />
            <div>
              <h2 className="text-[1.75rem] leading-[2.131rem] font-medium">
                Successful
              </h2>
              <p className="text-base leading-6 text-neutralGrey">{text}</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SuccessModal;
