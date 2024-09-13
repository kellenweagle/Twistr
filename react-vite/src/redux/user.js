import { csrfFetch } from "./csrf";

const GET_USER_BY_ID = 'users/getUserById';

const GetUserById = (users) => {
  return {
    type: GET_USER_BY_ID,
    payload: users
  }
}

export const getUserByIdThunk = (id) => async (dispatch) => {
  try {
    const res = await csrfFetch(`/api/users/${id}`);
    if (res.ok) {
      const data = await res.json();
      await dispatch(GetUserById(data))
    } else {
      throw res;
    }
  } catch(error) {
    return error;
  }
}
