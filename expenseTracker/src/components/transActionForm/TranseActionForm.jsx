import { useState } from "react";
import "./TransActionForm.css";
const TransActionForm = ({ addTransaction }) => {
  const [formValues, setFormValues] = useState({
    type: "expense",
    amount: 0,
    desc: "",
  });

  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(formValues);
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <input
        type="text"
        className="input"
        name="desc"
        onChange={changeHandler}
        required
      />
      <input
        type="number"
        className="input"
        name="amount"
        onChange={changeHandler}
        required
      />

      <input
        type="date"
        name="date"
        className="input"
        onChange={changeHandler}
        required
      />
      <div className="radioInputs">
        <div className="radioInput">
          <input
            type="radio"
            value="expense"
            name="type"
            id="expense"
            onChange={changeHandler}
            checked={formValues.type === "expense"}
          />
          <label htmlFor="expense">expense</label>
        </div>
        <div className="radioInput">
          <input
            type="radio"
            value="income"
            name="type"
            id="income"
            onChange={changeHandler}
            checked={formValues.type === "income"}
          />

          <label htmlFor="income">income</label>
        </div>
      </div>

      <button type="submit" className="btnAddTransAction">
        Add
      </button>
    </form>
  );
};

export default TransActionForm;
