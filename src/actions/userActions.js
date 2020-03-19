import request from "superagent";

const baseUrl = "http://localhost:4000";

//add error
export const ERROR_MESSAGE = "ERROR_MESSAGE";

export const displayError = payload => {
  return {
    type: ERROR_MESSAGE,
    payload
  };
};

//remove error message
export const REMOVE_ERROR = "REMOVE_ERROR";

export const removeError = () => {
  return {
    type: REMOVE_ERROR
  };
};

//login user
export const JWT = "JWT";

const loginUser = payload => {
  return {
    type: JWT,
    payload
  };
};

export function login(data) {
  return async function(dispatch) {
    try {
      const response = await request.post(`${baseUrl}/login`).send(data);
      const action = loginUser(response.body);
      // console.log(action)
      await dispatch(action);
      await dispatch(removeError());
    } catch (error) {
      if (error.response) {
        const errorMessage = displayError(error.response.body.message);
        return dispatch(errorMessage);
      }
      console.log(error);
    }
  };
}
//sign up
export const ADD_USER = "ADD_USER";

const signup = payload => {
  return {
    type: "ADD_USER",
    payload
  };
};

export function createUser(data) {
  return async function(dispatch) {
    try {
      const response = await request.post(`${baseUrl}/users`).send(data);
      const action = signup(response.body);
      await dispatch(action);
      dispatch(removeError());
      dispatch(displayError("Yeah, you can login now! :-) "));
    } catch (error) {
      if (error.response) {
        const errorMessage = displayError(error.response.body.message);
        dispatch(errorMessage);
      } else {
        console.error(error);
      }
    }
  };
}
