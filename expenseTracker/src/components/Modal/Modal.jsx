import TransActionForm from "../transActionForm/TranseActionForm";
import "./Modal.css";
const Modal = ({ addTransaction }) => {
  return (
    <div className="modal">
      <div className="modalContent">
        <h3>Add Your Transaction</h3>

        <div>
          <TransActionForm addTransaction={addTransaction} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
