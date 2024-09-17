import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const [filteredTodos, setFilteredTodos] = useState([]);

  const [selectedOption, setSelectedOption] = useState("All");

  useEffect(() => {
    filterTodos(selectedOption.value);
  }, [todos, selectedOption]);

  const addTodo = (input) => {
    // console.log(input);
    const newTodo = {
      id: Math.floor(Math.random() * 100),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id) => {
    // console.log(id);
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    console.log(selectedTodo);
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    console.log(id);
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const updateTodo = (id, newValue) => {
    console.log(id);
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const filterTodos = (status) => {
    console.log(status);
    switch (status) {
      // case "All":
      //   setFilteredTodos(todos);
      //   break;
      case "Completed":
        setFilteredTodos(todos.filter((t) => t.isCompleted));
        break;
      case "UnCompleted":
        setFilteredTodos(todos.filter((t) => !t.isCompleted));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  const selectHandler = (e) => {
    setSelectedOption(e);
    filterTodos(e.value);
  };

  return (
    <div className="container2">
      <div className="w-75">
        <NavBar
          unCompletedTodo={todos.filter((t) => !t.isCompleted).length}
          selectedOption={selectedOption}
          onChange={selectHandler}
        />
        <TodoForm addTodoHandler={addTodo} />
        <TodoList
          todos={filteredTodos}
          onComplete={completeTodo}
          onDelete={deleteTodo}
          onUpdateTodo={updateTodo}
        />
      </div>
    </div>
  );
};

export default TodoApp;
