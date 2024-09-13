import { csrfFetch } from "./csrf";

const GET_ALL_POSTS = 'posts/getAllPosts';
const CREATE_POST = 'posts/createPosts'

const getAllPosts = (posts) => {
  return {
    type: GET_ALL_POSTS,
    payload: posts
  }
}
const createPost = (post) => {
  return {
    type: CREATE_POST,
    payload: post
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

export const createPostThunk = (post) => async (dispatch) => {

  try {
      const options = {
          method: 'POST',
          header: { 'Content-Type': 'application/json' },
          body: JSON.stringify(review)
      }
      const res = await csrfFetch(`/api/posts/`, options)

      if (res.ok) {
          const postData = await res.json();
          await dispatch(createPost(postData));
          return postData;
      }

  } catch (error) {
      return error
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
    case CREATE_POST:
      newState = { ...state };
      newState.allPosts = [action.payload, ...newState.allPosts]
      newState.byId[action.payload.id] = action.payload;
      return newState;
    default:
      return state;
  }
}

export default postsReducer;
