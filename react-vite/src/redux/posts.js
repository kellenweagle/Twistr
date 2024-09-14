import { csrfFetch } from "./csrf";

const GET_ALL_POSTS = 'posts/getAllPosts';
const CREATE_POST = 'posts/createPost'
const DELETE_POST = 'posts/deletePost'

const getAllPosts = (posts) => ({
  type: GET_ALL_POSTS,
  payload: posts
})

const createPost = (post) => ({
  type: CREATE_POST,
  payload: post
})

const deletePost = (deletedPost) => ({
  type: DELETE_POST,
  payload: deletedPost
})


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
    console.log(post, 'in dispatch')
      const options = {
          method: 'POST',
          header: { 'Content-Type': 'application/json' },
          body: JSON.stringify(post)
      }
      const res = await csrfFetch(`/api/posts/`, options)

      if (res.ok) {
          const postData = await res.json();
          console.log(postData)
          await dispatch(createPost(postData));
      } else throw res;

  } catch (error) {
      return error
  }
}

export const deletePostThunk = (deletedPost) => async(dispatch) => {
  try {
    const options = {
      method: 'DELETE',
      header: {'Content-Type': 'application/json'},
      body: JSON.stringify(deletePost)
    };

    const res = await csrfFetch(`/api/posts/${deletedPost}`, options);

    if(res.ok) {
      const data = await res.json();
      dispatch(deletePost(data))
    } else {
      throw res;
    }
  } catch (e) {
    return e;
  }
}

const initialState = {
  allPosts: [],
  userPosts: [],
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
    case DELETE_POST:
      newState = {...state};
      const filteredPosts = newState.allPosts.filter((post) => {
        return post.id !== action.payload.id
      })
      const filteredUserPosts = newState.userPosts.filter((post) => {
        return post.id !== action.payload.id
      })
      newState.allPosts = filteredPosts;
      newState.userPosts = filteredUserPosts;

      const newById = {...newState.byId};
      delete newById[action.payload.id];
      newState.byId = newById;

      return newState;
    default:
      return state;
  }
}

export default postsReducer;
