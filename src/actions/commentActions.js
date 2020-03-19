import request from "superagent";

const baseUrl = "http://localhost:4000";

export const ALL_COMMENTS = "ALL_COMMENTS";

function allComments(payload) {
  return {
    type: ALL_COMMENTS,
    payload
  };
}

export const getComments = () => (dispatch, getState) => {
  const state = getState();
  const { comments } = state;

  if (!comments.length) {
    request(`${baseUrl}/comments`)
      .then(response => {
        const action = allComments(response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};

export const NEW_COMMENT = "NEW_COMMENT";

function newComment(payload) {
  return {
    type: NEW_COMMENT,
    payload
  };
}

export const createComment = data => (dispatch, getState) => {
  const state = getState();
  console.log("create Comment", state);
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
