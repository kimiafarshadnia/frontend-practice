import Select from "react-select";

const options = [
  { value: "All", label: "All" },
  { value: "Completed", label: "Completed" },
  { value: "UnCompleted", label: "UnCompleted" },
];

const NavBar = ({ unCompletedTodo, onChange, selectedOption }) => {
  if (!unCompletedTodo)
    return <h5 className="text-center">Set Your Today Todos !</h5>;

  return (
    <header className="d-flex flex-column flex-md-row justify-content-center  mb-4">
      <div className="d-flex justify-content-center align-items-center mb-4">
        <span className="numberUnCompleted">{unCompletedTodo}</span>
        <h5 className="m-0 ">is not completed</h5>
      </div>

      <Select
        onChange={onChange}
        value={selectedOption}
        options={options}
        className="col-12 col-md-4 ms-md-3"
      />
    </header>
  );
};

export default NavBar;
