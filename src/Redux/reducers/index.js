import { DATA_LOADED, USER_LOGOUT, VALIDATE_NAME, CHOOSE_COLOR, LOADING_POSTS } from "../constants/action-types";

const initialState = {
  name: "",
  posts: [],
  color: "grey",
  isFetchingPosts: false
};

function rootReducer(state = initialState, action) {
  console.log(action.type);
  
  if (action.type === VALIDATE_NAME) {
    return Object.assign({}, state, {
      name: action.payload
    });
  }

  if (action.type === LOADING_POSTS) {
    return Object.assign({}, state, {
      isFetchingPosts: action.payload
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
    console.log("data loaded" + action.payload);
    return Object.assign({}, state, {
      posts: state.posts.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;