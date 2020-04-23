import React, { useState } from "react";

const TodoForm = (props) => {
  const [toDo, setTodo] = useState("");
  const submit = (e) => {
    e.preventDefault();
    props.add({ item: toDo, completed: false, id: Date.now() });
  };

  return (
    <form onSubmit={submit}>
      <input
        name="item"
        value={toDo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add Item </button>
    </form>
  );
};
export default TodoForm;
