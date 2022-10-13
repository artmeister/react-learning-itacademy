const initialValue = 0;

const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case "addToCart":
      return state + action.payload
    case "removeFromCart":
      return state - action.payload
    default:
      return state;
  }
};

export default reducer;
