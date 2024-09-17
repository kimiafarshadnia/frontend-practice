import { useState, useRef, useEffect } from "react";
import { BiPlus, BiCheck } from "react-icons/bi";

const TodoForm = ({ buttonLabel = "Add", edit, addTodoHandler }) => {
  const [input, setInput] = useState(edit ? edit.text : "");

  const changeHandler = (e) => {
    const userInput = e.target.value;
    console.log(userInput);
    setInput(userInput);
  };

  const inputRef = useRef("");
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!input) {
      alert("enter to do !");
      return;
    }
    addTodoHandler(input);
    setInput("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="row justify-content-center mb-3">
        <input
          className="col-12 col-md-7 me-md-3"
          type="text"
          onChange={changeHandler}
          value={input}
          ref={inputRef}
          placeholder={edit ? "Update to do..." : "Add new to do..."}
        />
        <button
          className={`col-12 col-md-1 mt-2  mt-md-0 ${
            edit ? "btnUpdateTodo" : "btnAddTodo"
          }`}
          type="submit"
        >
          {edit ? <BiCheck /> : <BiPlus />}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
