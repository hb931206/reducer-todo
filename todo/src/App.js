import React, { useState, useReducer } from "react";
import "./App.css";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { initialState, todoReducer } from "./reducers/reducer";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  // console.log(initialState);
  // Toggle function dispatches call to my reducer
  // Clear all function that clears the items
  // Add todo function

  const addTodo = (item) => {
    dispatch({ type: "ADD_TODO", payload: item });
  };

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <TodoList tasks={state} />
      <TodoForm add={addTodo} />
      <div></div>
    </div>
  );
}

export default App;
