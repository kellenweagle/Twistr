import { csrfFetch } from "./csrf";

const GET_ALL_POSTS = 'posts/getAllPosts';

const getAllPosts = (posts) => {
  return {
    type: GET_ALL_POSTS,
    payload: posts
  }
}

export const getAllPostsThunk = () => async (dispatch) => {
  try {
    const res = await csrfFetch('/api/posts');
    if (res.ok) {
      const data = await res.json();
      console.log(data, 'data-----------------')
      await dispatch(getAllPosts(data))
    } else {
      throw res;
    }
  } catch(error) {
    return error;
  }
}

const initialState = {
  allPosts: [],
  byId: {}
}

const postsReducer = (state = initialState, action) => {
  let newState;
  switch(action.type) {
    case GET_ALL_POSTS:
      newState = {...state};
      newState.allPosts = action.payload.posts.reverse();

      for (let post of action.payload.posts) {
        newState.byId[post.id] = post;
      }
      return newState;
    default:
      return state;
  }
}

export default postsReducer;
