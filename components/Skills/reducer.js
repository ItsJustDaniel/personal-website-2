const reducer = (state, action) => {
  //   if (state.list === []) {
  //     return { list: [1, 2, 3, 4, 5, 6, 7, 8] };
  //   }
  if (action.type === "list-remove") {
    return {
      list: [
        ...state.list.slice(0, action.rand),
        ...state.list.slice(action.rand + 1),
      ],
    };
  }
};

export default reducer;
