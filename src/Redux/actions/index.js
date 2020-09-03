import { VALIDATE_NAME, USER_LOGOUT, CHOOSE_COLOR, LOADING_POSTS, DATA_LOADED } from "../constants/action-types";

export function validateName(payload) {
  console.log(payload + "validatename");
  return { type: VALIDATE_NAME, payload };
}

export function chooseColor(payload) {
  return { type: CHOOSE_COLOR, payload };
}

 export function loadingPosts(payload) {
   return { type: LOADING_POSTS, payload };
 }

export function loadingData(payload) {
  return { type: CHOOSE_COLOR, payload };
}

export function getData() {
    return function(dispatch) {
      dispatch({type:LOADING_POSTS, payload:true})
      return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
          dispatch({ type: DATA_LOADED, payload: json });
        })
        .then(dispatch({type:LOADING_POSTS, payload:false}))
    };
  }

export function userLogout(payload) {
  console.log(payload);
  return { type: USER_LOGOUT, payload };
}