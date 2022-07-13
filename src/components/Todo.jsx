import { BiTrash, BiEdit, BiCheckDouble } from "react-icons/bi";
const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="todo row" key={todo.id}>
        <div
          className={`col-12 col-sm-8 ${
            todo.isCompleted ? "completed" : "todoText"
          }`}
        >
          {todo.text}
        </div>
        <div className="col-12 col-sm-4 d-flex justify-content-around justify-content-sm-end mt-2">
          <button onClick={onEdit} className="button-edit">
            <BiEdit />
          </button>
          <button onClick={onComplete} className="button-completed mx-2">
            <BiCheckDouble />
          </button>
          <button onClick={onDelete} className="button-remove">
            <BiTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
