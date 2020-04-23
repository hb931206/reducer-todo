import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  console.log("TodoList", props);
  return (
    <div classname="TodoList">
      {props.tasks?.map((item) => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
    </div>
  );
};

export default TodoList;
