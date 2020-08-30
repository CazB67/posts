import { DATA_LOADED, SELECTED_POST, VALIDATE_NAME } from "../constants/action-types";

const initialState = {
  name: "",
  posts: [],
  color: "",
  isFetchingPosts: false,
  selectedPost: ""
};

function rootReducer(state = initialState, action) {
  console.log(action);


  if (action.type === VALIDATE_NAME) {
    return Object.assign({}, state, {
      name: action.payload
    });
  }

  if (action.type === SELECTED_POST) {
    return Object.assign({}, state, {
      selectedPost: action.payload
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