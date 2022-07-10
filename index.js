const { createStore } = require("redux");
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const INCREMENT_VALUE_BY_PAYLOAD = "INCREMENT_VALUE_BY_PAYLOAD";
const ADD_USER = "ADD_USER";
// state --- Start
const initialCountState = {
  users: ["Mahesh"],
  count: 1,
};
// state --- end

// action --- start
const incrementCounter = () => {
  return { type: INCREMENT };
};
const decrementCounter = () => {
  return { type: DECREMENT };
};
const incrementValueByPayload = (value) => {
  return {
    type: INCREMENT_VALUE_BY_PAYLOAD,
    payload: value,
  };
};
const addUserCounter = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

// state end

// Reducer start

const actionReducer = (state = initialCountState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        count: state.count - 1,
      };
    case INCREMENT_VALUE_BY_PAYLOAD:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case ADD_USER:
      return {
        users: [...state.users, action.payload],
        count: state.count + 1,
      };

    default:
      break;
  }
};
//  Reducer end

// create store

const store = createStore(actionReducer);
store.subscribe(() => {
  console.log(store.getState());
});

//  dispatch store

store.dispatch(addUserCounter("Ratul"));
store.dispatch(addUserCounter("Nayon"));
store.dispatch(incrementCounter("Nayon"));
store.dispatch(decrementCounter("Nayon"));
store.dispatch(incrementValueByPayload("Nayon"));
