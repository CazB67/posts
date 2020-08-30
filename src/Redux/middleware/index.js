import { VALIDATE_NAME } from "../constants/action-types";

export function nameValidationMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      // do your stuff
      if (action.type === VALIDATE_NAME) {
        // console.log(action.payload.name);

        if (action.payload.name.length < 4 ) {
          console.log("less than 4");
          return dispatch({ type: "INVALID NAME" });
        }
        
      }
      return next(action);
    };
  };
}