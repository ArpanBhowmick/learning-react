import AppName from "./components/Appname";
import AddTodo from "./components/AddTodo";
// import ToduItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  
  const todoItems = [
    { name: "Buy Milk" , dueDate: "1/7/2025" },
    { name: "Go To College" , dueDate: "1/7/2025" },
    {name : "do something" , dueDate : "1/7/2025"}
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems = {todoItems}></TodoItems>
    </center>
  );
}

export default App;
