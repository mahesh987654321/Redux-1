/* const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const GET_TODO_REQUEST = "GET_TODO_REQUEST";
const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
const GET_TODO_FAILED = "GET_TODO_FAILED";
const API = "https://jsonplaceholder.typicode.com/todos";
const thunk = require("redux-thunk").default;
const initialCountToDO = {
  toDoList: [],
  loading: false,
  error: null,
};
const getToDoListRequest = () => {
  return {
    type: GET_TODO_REQUEST,
  };
};
const getToDoListSuccess = (todos) => {
  return {
    type: GET_TODO_SUCCESS,
    payload: todos,
  };
};
const getToDoListFailed = (error) => {
  return {
    type: GET_TODO_FAILED,
    payload: error,
  };
};
const toDoReducer = (state = initialCountToDO, action) => {
  switch (action.type) {
    case GET_TODO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        payload: action.payload,
      };
    case GET_TODO_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
const fetchData = () => {
  return (dispatch) => {
    dispatch(getToDoListRequest());
    axios
      .get(API)

      .then((res) => {
        const todo = res.data;
        const title = todo.map((item) => item.title);
        dispatch(getToDoListSuccess(title));
      })
      .catch((error) => {
        dispatch(getToDoListFailed(error.message));
      });
  };
};
const store = createStore(toDoReducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchData());
 */

const { createStore, applyMiddleware } = require("redux");
 const { default: axios } = require("axios");
const GET_TODO_REQUEST = "GET_TODO_REQUEST";
const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
const GET_TODO_FAILED = "GET_TODO_FAILED";
const API = "https://jsonplaceholder.typicode.com/todos";
const thunk = require("redux-thunk").default;
const initialCountToDO = {
  todo: [],
  loading: false,
  error: null,
};
const getToDoListRequest = () => {
  return {
    type: GET_TODO_REQUEST,
  };
};
const getToDoListSuccess = (todos) => {
  return {
    type: GET_TODO_SUCCESS,
    payload: todos,
  };
};
const getToDoListFailed = (error) => {
  return {
    type: GET_TODO_FAILED,
    payload: error,
  };
};
const toDoReducer = (state = initialCountToDO, action) => {
  switch (action.type) {
    case GET_TODO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_TODO_SUCCESS:
      return {
        loading: false,
        payload: action.payload,
      };
    case GET_TODO_FAILED:
      return {
        loading: false,
        payload: action.payload,
      };

    default:
      return state;
  }
};
const fetchData = () => {
  return (dispatch) => {
    dispatch(getToDoListRequest());
    axios.get(API).then((res) => {
      const api = res.data;
      const title = api.map((items) => items.title);
      dispatch(getToDoListSuccess(title));
    });
  };
};
const store = createStore(toDoReducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchData());
