import { VALIDATE_NAME } from "../constants/action-types";

export function validateName(payload) {
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