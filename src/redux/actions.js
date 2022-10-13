const addToCart = (id) => {
  return {
    type: "addToCart",
    payload: console.log(id)
  };
};

const removeFromCart = (id) => {
  return {
    type: "removeFromCart",
    payload: console.log(id)
  };
};

export { addToCart, removeFromCart };
