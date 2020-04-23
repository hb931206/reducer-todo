import React, { useState, useReducer } from "react";
import "./App.css";
// import TodoList from "./components/TodoList";
// import TodoForm from "./components/TodoForm";
import { initialState, todoReducer } from "./reducers/reducer";

function App() {
  const [listState, setListState] = useState([initialState]);
  console.log(initialState);

  return (
    <div className="App">
      <h1>My Todo List</h1>
    </div>
  );
}

export default App;
