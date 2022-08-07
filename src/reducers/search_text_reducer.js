const search_text_reducer = (state = { searchText: "" }, action) => {
  switch (action.type) {
    case "SEARCH_TERM":
      return { ...state, searchText: action.payload };
    default:
      return state;
  }
};

export default search_text_reducer;
