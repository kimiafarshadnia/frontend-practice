import { useState } from "react";
import "./OverViewComponent.css";
import { BiUpArrowAlt, BiDownArrowAlt, BiX, BiPlus } from "react-icons/bi";
import Modal from "../Modal/Modal";

const OverViewComponent = ({ income, expense, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="overView">
      <div className="cardUser">
        <div className="totalBalance">
          <p>Total Balance </p>
          <p>$ {income - expense}</p>
        </div>

        <div className="tracker">
          <div className="box ">
            <i className="icons BiUpArrowAlt ">
              <BiUpArrowAlt />
            </i>
            <div className="">
              <p className="">Expense</p>
              <p className="">{expense}</p>
            </div>
          </div>

          <div className="box ">
            <i className="icons BiDownArrowAlt ">
              <BiDownArrowAlt />
            </i>
            <div className="">
              <p className="">Incom</p>
              <p className="">{income}</p>
            </div>
          </div>
        </div>
      </div>

      {isShow && <Modal addTransaction={addTransaction} />}
      <div className="menuBottom">
        <div>
          <button
            className={`btnCircle ${isShow ? "btnCloseModal" : "btnOpenModal"}`}
            onClick={() => setIsShow((prevState) => !prevState)}
          >
            {isShow ? <BiX /> : <BiPlus />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OverViewComponent;
