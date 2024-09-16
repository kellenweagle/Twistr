import { csrfFetch } from "./csrf";

const GET_ALL_COMMENTS = 'comments/getAllComments';
const CREATE_COMMENT = 'comments/createComment'
const UPDATE_COMMENT = 'comments/updateComment';
const DELETE_COMMENT = 'comments/deleteComment';

const getAllComments = (comments) => ({

    type: GET_ALL_COMMENTS,
    payload: comments

})
const createComment = (comment) => ({

    type: CREATE_COMMENT,
    payload: comment

})
const updateComment = (comment) => ({

    type: UPDATE_COMMENT,
    payload: comment

})

const deleteComment = (comment) => ({
    type: DELETE_COMMENT,
    payload: comment
})


export const getAllCommentsThunk = (id) => async (dispatch) => {
    try {
        const res = await csrfFetch(`/api/posts/${id}/comments`);
        if (res.ok) {
            const data = await res.json();
            await dispatch(getAllComments(data));
            return data.comments
        } else {
            throw res;
        }
    } catch (error) {
        return error;
    }
}

export const createCommentThunk = (id, comment) => async (dispatch) => {

    try {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(comment)
        }
        const res = await csrfFetch(`/api/posts/${id}/comments`, options)

        if (res.ok) {
            const data = await res.json();
            await dispatch(createComment(data));
            return data;
        } else throw res;

    } catch (error) {
        return error
    }
}
export const updateCommentThunk = (id, commentId, comment) => async (dispatch) => {

    try {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(post)
        }
        const res = await csrfFetch(`/api/posts/${id}/comments/${commentId}`, options)

        if (res.ok) {
            const data = await res.json();
            await dispatch(updateComment(data));
        } else throw res;

    } catch (error) {
        return error
    }
}

export const deleteCommentThunk = (id, comment) => async (dispatch) => {
    try {


        const options = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(spot)
        }


        const deletedComment = await csrfFetch(`/api/posts/${id}/comments/${comment.id}`, options)



        if (deletedComment.ok) {


            const data = await deletedComment.json();


            await dispatch(deleteComment(data));

            return data;
        } else throw deletedComment

    } catch (error) {
        return error;
    }
}

const initialState = {
    allComments: [],
    byId: {}
}

const commentsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_ALL_COMMENTS:
            newState = { ...state };
            newState.allComments = action.payload.comments.reverse();

            for (let comment of action.payload.comments) {
                newState.byId[comment.id] = comment;
            }
            return newState;
        case CREATE_COMMENT:
            newState = { ...state };
            newState.allComments = [action.payload, ...newState.allComments]
            newState.byId[action.payload.id] = action.payload;
            return newState;
        case UPDATE_COMMENT: {
            newState = { ...state }

            const commentId = action.payload.id;

            const newAllComments= [];
            for (let i = 0; i < newState.allComments.length; i++) {
                let currComment = newState.allComments[i];
                if (currComment.id === commentId) {
                    newAllComments.push(action.payload);
                } else {
                    newAllComments.push(currComment)
                }
            }

            newState.allComments = newAllComments;
            newState.byId = { ...newState.byId, [commentId]: action.payload };
            return newState;
        }
        case DELETE_COMMENT: {
            newState = { ...state }

            const filteredComments = newState.allComments.filter(comment => {

                return comment.id !== action.payload.id
            })

            newState.allComments = filteredComments

            const newById = { ...newState.byId };
            delete newById[action.payload.id];
            newState.byId = newById;


            return newState
        }
        default:
            return state;
    }

}

export default commentsReducer;
