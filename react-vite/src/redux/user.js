import { csrfFetch } from "./csrf";

const GET_USER_BY_ID = 'users/getUserById';

const GET_ALL_USERS = 'users/getAllUsers';

const getUserById = (user) => {
  return {
    type: GET_USER_BY_ID,
    payload: user
  }
}

const getAllUsers = (users) => {
  return {
    type: GET_ALL_USERS,
    payload: users
  }
}

export const getUserByIdThunk = (id) => async (dispatch) => {
  try {
    const res = await csrfFetch(`/api/users/${id}`)
    if (res.ok) {
      const data = await res.json();
      await dispatch(getUserById(data));
      console.log('userdetails from state in thunk', data)
    } else {
      throw res
    }
  } catch(error) {
    return error
  }
}

export const getAllUsersThunk = () => async (dispatch) => {
  try {
    const res = await csrfFetch('/api/users');
    if (res.ok) {
      const data = await res.json();
      await dispatch(getAllUsers(data))
    } else {
      throw res
    }
  } catch(error) {
    return error
  }
}

const initialState = {
  userDetails: {},
  allUsers: []
}

const userReducer = (state = initialState, action) => {
  let newState;
  switch(action.type) {
    case GET_USER_BY_ID:
      newState = {...state};
      newState.userDetails = action.payload;
      return newState;
    case GET_ALL_USERS:
      newState = {...state};
      newState.allUsers = action.payload.users;
      return newState;
    default:
      return state
  }
}

export default userReducer;
