import request from "superagent"

const baseUrl = "http://localhost:4000"

export const NEW_COMMENT = "NEW_COMMENT";

function newComment(payload) {
  return {
    type: NEW_COMMENT,
    payload
  };
}

export const createComment = data => (dispatch, getState) => {
  const state = getState();
  const { user } = state;

  request
    .post(`${baseUrl}/comments`)
    .set(`Authorization`, `Bearer ${user.jwt}`)
    .send(data)
    .then(response => {
      const action = newComment(response.body);
      dispatch(action);
    })
    .catch(console.error);
};