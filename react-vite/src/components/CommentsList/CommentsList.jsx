import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LuSendHorizonal } from "react-icons/lu";
import CommentTile from '../CommentTile'

import './CommentsList.css'

const CommentsList = (comments) => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector((state) => state.session.user)
  comments = comments.comments;

  // if (comments) {
  //   userId = comments[0].user_Id
  // }

  // useEffect(() => {
  //   const getData = async () => {
  //     await dispatch(getUserByIdThunk(comments[0].user_id))
  //     setIsLoaded(true);
  //   }
  //   if (!isLoaded) {
  //     getData();
  //   }
  // }, [comments, dispatch, isLoaded])

  // console.log('comments user id', comments[0].user_id)

  return (
    <div className="comments-list-container">
      <div className="comment-form-container">
        <div className="profile-pic">{sessionUser.username[0].toLowerCase()}</div>
        <form action="" className="comment-form">
          <input type="text" placeholder={`Reply as @${sessionUser.username.toLowerCase()}`}/>
          <div className="input-icon">
            <LuSendHorizonal />
          </div>
        </form>
      </div>
      {comments ? (
        <div className="comments">
          {comments.map((comment, idx) => (
            <div key={`${idx}-${comment.post_id}`} className="comment-tile">
              <CommentTile comment={comment}/>
            </div>
          ))}

        </div>

      ) : null}
    </div>
  )
}

export default CommentsList
