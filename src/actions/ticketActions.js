import request from "superagent"

const baseUrl = "http://localhost:4000"

export const NEW_TICKET = "NEW_TICKET";

function newTicket(payload) {
  return {
    type: NEW_TICKET,
    payload
  };
}

export const createTicket = data => (dispatch, getState) => {
  const state = getState();
  const { user } = state;

  request
    .post(`${baseUrl}/tickets`)
    .set(`Authorization`, `Bearer ${user.jwt}`)
    .send(data)
    .then(response => {
      const action = newTicket(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
