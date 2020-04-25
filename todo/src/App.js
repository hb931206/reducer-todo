import React, { useState, useReducer } from "react";
import "./App.css";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { initialState, todoReducer } from "./reducers/reducer";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Toggle function dispatches call to my reducer
  // Clear all function that clears the items

  const addTodo = (item) => {
    dispatch({ type: "ADD_TODO", payload: item });
  };

  const clearCompleted = (item) => {
    dispatch({ type: "Clear_Completed", payload: item });
  };

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <TodoList dispatch={dispatch} tasks={state} />
      <TodoForm add={addTodo} clear={clearCompleted} />
      <div></div>
    </div>
  );
}

export default App;
