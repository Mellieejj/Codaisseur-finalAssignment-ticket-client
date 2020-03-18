import request from "superagent";

const baseUrl = "http://localhost:4000";

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
      console.log(action)
      await dispatch(action);
    } catch (error) {
      console.error(error);
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
    } catch (error) {
      console.error(error);
    }
  };
}
