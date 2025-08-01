// import { useState } from "react";
import ToduItem from "./TodoItem";

const TodoItems = ({ todoItems , handleRemove}) => {




  return (
    <div className="items-containers">
      {todoItems.map((item) => (
        <ToduItem
          key={item.name}
          todoName={item.name}
          toduDate={item.dueDate}
          handleRemove={handleRemove}
        ></ToduItem>
      ))}
    </div>
  );
};

export default TodoItems;
