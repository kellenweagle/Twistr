import { csrfFetch } from "./csrf";

const GET_ALL_POSTS = 'posts/getAllPosts';
const GET_ONE_POST = 'posts/getOnePost'
const CREATE_POST = 'posts/createPost'
const UPDATE_POST = 'posts/updatePost'
const DELETE_POST = 'posts/deletePost'

const getAllPosts = (posts) => ({
  type: GET_ALL_POSTS,
  payload: posts
})

const getOnePost = (post) => ({
  type: GET_ONE_POST,
  payload: post
})

const createPost = (post) => ({
  type: CREATE_POST,
  payload: post
})

const updatePost = (post) => ({
  type: UPDATE_POST,
  payload: post
})

const deletePost = (post) => ({
  type: DELETE_POST,
  payload: post
})


export const getAllPostsThunk = () => async (dispatch) => {
  try {
    const res = await csrfFetch('/api/posts');
    if (res.ok) {
      const data = await res.json();
      await dispatch(getAllPosts(data))
    } else {
      throw res;
    }
  } catch(error) {
    return error;
  }
}

export const getOnePostThunk = (postid) => async (dispatch) => {
  try {
    const res = await csrfFetch(`/api/posts/${postid}`)
    if(res.ok) {
      const data = await res.json();
      await dispatch(getOnePost(data))
    } else {
      throw res;
    }

  } catch (e) {
    return e;
  }
}

export const createPostThunk = (post) => async (dispatch) => {

  try {
    console.log(post, 'in dispatch')
      const options = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
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

export const updatePostThunk = (id, post) => async(dispatch) => {
  try {
    const options = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(post)
    }
    console.log("we are in the thunk")

    const res = await csrfFetch(`api/posts/${id}`, options)
    console.log(res)
    if(res.ok) {
      const data = await res.json();
      dispatch(updatePost(data))
      return data;
    } else {
      throw res;
    }
  } catch(e) {
    return e;
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
  updatePost: {},
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
    case GET_ONE_POST:
      newState ={...state};
      newState.allPosts = [action.payload]
      newState.updatePost = action.payload;
      return newState;
    case CREATE_POST:
      newState = { ...state };
      newState.allPosts = [action.payload, ...newState.allPosts]
      newState.byId[action.payload.id] = action.payload;
      return newState;
    case UPDATE_POST:
      newState = { ...state }
      const postId = action.payload.id;

      const newAllPosts = [];
      for(let i = 0; i < newState.allPosts.length; i++) {
        let currPost = newState.allPosts[i];
        if(currPost.id === postId) {
          newAllPosts.push(action.payload);
        } else {
          newAllPosts.push(currPost);
        }

        newState.allPosts = newAllPosts;
        newState.byId = {...newState.byId, [postId]: action.payload}
        return newState;
      }
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
