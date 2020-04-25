import React from "react";

const Todo = (props) => {
  //   console.log("Todo", props);
  console.log("Dispatch", props.dispatch);
  console.log("Todo props", props);
  return (
    <div
      className={`item${props.item?.completed ? " completed" : ""}`}
      onClick={() =>
        props.dispatch({ type: "Toggle_Completed", payload: props.item.id })
      }
      //   bring in the dispatch here to envoke it
    >
      <p>{props.item?.item}</p>
    </div>
  );
};

export default Todo;
