import AppName from "./components/Appname";
import AddTodo from "./components/AddTodo";
import ToduItem1 from "./components/TodoItem1";
import ToduItem2 from "./components/TodoItem2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-containers">
        <ToduItem1 />
        <ToduItem2 />
      </div>
    </center>
  );
}

export default App;
