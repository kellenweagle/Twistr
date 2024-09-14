import { csrfFetch } from "./csrf";

const GET_ALL_COMMENTS = 'comments/getAllComments';

const getComments = (comments) => ({
  type: GET_ALL_COMMENTS,
  payload: comments
})

export const getCommentsThunk = (postId) => async(dispatch) => {
  try {
    const res = await csrfFetch(`/api/comments/${postId}`);
    if(res.ok) {
      const data = await res.json();
      await dispatch(getComments(data))
      return data;

    } else {
      throw res;
    }
  } catch(e) {
    return e;
  }
}

const initialState = {
  allComments: [],
  byId: {}
}

function commentsReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_ALL_COMMENTS: {
      newState = {...state}
      newState.allComments = action.payload.Comments;

      for(let comment of action.payload.Comments) {
        newState.byCommentId[comment.id] = comment;
      }
      return newState;
    }
  }
}

export default commentsReducer;
