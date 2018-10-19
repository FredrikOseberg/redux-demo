const productsReducer = (state = [], action) => {
  if (action.type === 'ADD_PRODUCT') {
    return [...state, action.payload.product];
  } else if (action.type === 'REMOVE_PRODUCT') {
    return state;
  }
  return state;
};

export default productsReducer;
