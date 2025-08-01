import ToduItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <div className="items-containers">
      {todoItems.map((item) => (
        <ToduItem todoName={item.name} toduDate={item.dueDate}></ToduItem>
      ))}
    </div>
  );
};

export default TodoItems;
