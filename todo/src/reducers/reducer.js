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
    default:
      return state;
  }
};
