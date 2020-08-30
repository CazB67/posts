import { VALIDATE_NAME, SELECTED_POST } from "../constants/action-types";

export function validateName(payload) {
  console.log(payload);
  return { type: VALIDATE_NAME, payload };
}

export function getData() {
    return function(dispatch) {
      return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "DATA_LOADED", payload: json });
        });
    };
  }

export function selectedPost(payload) {
  console.log(payload);
  return {type: SELECTED_POST, payload };

}