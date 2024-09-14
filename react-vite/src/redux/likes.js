import { csrfFetch } from "./csrf";

const GET_ALL_LIKES = 'comments/getAllLikes';
const CREATE_LIKE = 'comments/createLike'

const DELETE_LIKE = 'comments/deleteLike';

const getAllLikes = (likes) => ({

    type: GET_ALL_LIKES,
    payload: likes

})
const createLike = (like) => ({

    type: CREATE_LIKE,
    payload: like

})

const deleteLike = (like) => ({
    type: DELETE_LIKE,
    payload: like
})


export const getAllLikesThunk = (id) => async (dispatch) => {
    try {
        const res = await csrfFetch(`/api/posts/${id}/likes`);
        if (res.ok) {
            const data = await res.json();
            console.log(data, 'data-----------------')
            await dispatch(getAllLikes(data))
        } else {
            throw res;
        }
    } catch (error) {
        return error;
    }
}

export const createLikeThunk = (id, like) => async (dispatch) => {

    try {
        console.log(like, 'in dispatch')
        const options = {
            method: 'POST',
            header: { 'Content-Type': 'application/json' },
            body: JSON.stringify(like)
        }
        const res = await csrfFetch(`/api/posts/${id}/likes`, options)

        if (res.ok) {
            const data = await res.json();
            console.log(data)
            await dispatch(createLike(data));
        } else throw res;

    } catch (error) {
        return error
    }
}

export const deleteLikeThunk = (id, like) => async (dispatch) => {
    try {


        const options = {
            method: 'DELETE',
            header: { 'Content-Type': 'application/json' },
            body: JSON.stringify(like)
        }


        const deletedLike = await csrfFetch(`/api/posts/${id}/likes`, options)



        if (deletedLike.ok) {


            const data = await deletedLike.json();


            await dispatch(deleteLike(data));

            return data;
        } else throw deletedLike

    } catch (error) {
        return error;
    }
}

const initialState = {
    allLikes: [],
    byId: {}
}

const likesReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_ALL_LIKES:
            newState = { ...state };
            newState.allLikes = action.payload.likes.reverse();

            for (let like of action.payload.likes) {
                newState.byId[like.id] = like;
            }
            return newState;
        case CREATE_LIKE:
            newState = { ...state };
            newState.allLikes = [action.payload, ...newState.allLikes]
            newState.byId[action.payload.id] = action.payload;
            return newState;
        
        case DELETE_LIKE: {
            newState = { ...state }

            const filteredLikes = newState.allLikes.filter(like => {

                return like.id !== action.payload.id
            })
            
            newState.allLikes = filteredLikes

            const newById = { ...newState.byId };
            delete newById[action.payload.id];
            newState.byId = newById;

            
            return newState
        }
        default:
            return state;
    }

}

export default likesReducer;
