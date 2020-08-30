import { VALIDATE_NAME } from "../constants/action-types";
import { DATA_LOADED } from "../constants/action-types";

const initialState = {
  name: ""
};

function rootReducer(state = initialState, action) {
  if (action.type === VALIDATE_NAME) {
    return Object.assign({}, state, {
      name: action.payload
    });
  }

  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;