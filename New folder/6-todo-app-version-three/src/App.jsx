import AppName from "./components/Appname";
import AddTodo from "./components/AddTodo";
import ErrorMassage from "./components/ErrorMassage";
// import ToduItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import "./App.css";
import Container from "./components/Container";
import { useState } from "react";

function App() {

   const [todoItems, setTodoItems] = useState([]);

  // const [todoItems, setTodoItems] = useState([
  //   { name: "Buy Milk", dueDate: "1/7/2025" },
  //   { name: "Go To College", dueDate: "1/7/2025" },
  //   { name: "do something", dueDate: "1/7/2025" },
  // ]);



  const handleAddButton = (todoItemName, todoItemDueDate) => {
    console.log(`newitem added : ${todoItemName} Date : ${todoItemDueDate}`);
    let newTodo = { name: todoItemName, dueDate: todoItemDueDate }
    setTodoItems([...todoItems , newTodo])
  };


  const handleRemove = (todoName, toduDate) => {
    console.log(`${todoName} is remove from the todo list`);
    let newTodoItems = todoItems.filter(item => item.name !== todoName)
    setTodoItems(newTodoItems)
  };


  return (
    <Container>
    <div className="todo-container">
      <AppName />
      <AddTodo handleAddButton={handleAddButton} />
      {todoItems.length === 0 && <ErrorMassage />}
      <TodoItems todoItems={todoItems} handleRemove = {handleRemove}></TodoItems>
    </div>
    </Container>
  );
}

export default App;
