const { createStore, combineReducers, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCT";
const GET_CART = "GET_CART";
const ADD_CART = "ADD_CART";
const initialStateCount = {
  products: ["sugar", "sweet"],
  count: 2,
};
const initialCartCount = {
  cart: ["sugar"],
  countCart: 1,
};
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};
const addProducts = (product) => {
  return {
    type: ADD_PRODUCTS,
    payload: product,
  };
};
const getCart = () => {
  return {
    type: GET_CART,
  };
};
const addCart = (product) => {
  return {
    type: ADD_CART,
    payload: product,
  };
};
const countReducer = (state = initialStateCount, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state };
    case ADD_PRODUCTS:
      return {
        products: [...state.products, action.payload],
        count: state.count + 1,
      };

    default:
      return state;
  }
};
const cartReducer = (state = initialCartCount, action) => {
  switch (action.type) {
    case GET_CART:
      return { ...state };
    case ADD_CART:
      return {
        cart: [...state.cart, action.payload],
        countCart: state.countCart + 1,
      };

    default:
      return state;
  }
};
const rootReducer = combineReducers({
  productR: countReducer,
  cartR: cartReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(addProducts("af"));
