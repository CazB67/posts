import { DATA_LOADED, USER_LOGOUT, VALIDATE_NAME, CHOOSE_COLOR } from "../constants/action-types";

const initialState = {
  name: "",
  posts: [],
  color: "grey",
  isFetchingPosts: false
};

function rootReducer(state = initialState, action) {
  
  if (action.type === VALIDATE_NAME) {
    return Object.assign({}, state, {
      name: action.payload
    });
  }

  if (action.type === USER_LOGOUT) {
    return Object.assign({}, state, {
      name: action.payload
    });
  }

  if (action.type === CHOOSE_COLOR) {
    return Object.assign({}, state, {
      color: action.payload
    });
  }

  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      posts: state.posts.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;