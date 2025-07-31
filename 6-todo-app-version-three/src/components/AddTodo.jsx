import { useState } from "react";

function AddTodo({ handleAddButton }) {
  const [todoItemName, setTodoName] = useState("");
  const [todoItemDueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleButtonClicked = () => {
    if (!todoItemName || !todoItemDueDate) {
      alert("please enter both todo name and date!");
      return;
    }
    handleAddButton(todoItemName, todoItemDueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoItemName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={todoItemDueDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
