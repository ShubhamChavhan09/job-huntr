const initialState = {
  todos: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_LIST":
      return {
        ...state,
        todos: [...state.todos, { text: action.text }],
      };
    default:
      return state;
  }
}

export { initialState, reducer };
