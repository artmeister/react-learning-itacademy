const initialValue = 0;

const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return state + action.payload
    case "REMOVE_FROM_CART":
      return state - action.payload
    default:
      return state;
  }
};

export default reducer;
