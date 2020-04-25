export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 1,
  },
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    case "Toggle_Completed":
      console.log(action.payload);
      return state.map((todo) => {
        if (action.payload === todo.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    case "Clear_Completed":
      return state.filter((todo) => {
        return todo.completed === false;
      });

    default:
      return state;
  }
};
