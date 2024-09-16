import { LuSendHorizonal } from "react-icons/lu";
import CommentTile from '../CommentTile'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './CommentsList.css'
import { createCommentThunk, getAllCommentsThunk } from "../../redux/comments";

const CommentsList = ({post, users}) => {
  const sessionUser = useSelector(state => state.session.user)
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');
  const [updatedComments, setUpdatedComments] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [errors, setErrors] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await dispatch(getAllCommentsThunk(post.id));
      if (res) {
        setUpdatedComments(res);
        setIsLoaded(true)
      }
    }
    if (!isLoaded) {
      getData()
    }
  }, [dispatch, post.id])

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const newCommentData = ({
      comment: comment
    })

    const newComment = await dispatch(createCommentThunk(post.id, newCommentData))

    if (newComment.errors) {
      setErrors(newComment.errors)
    } else {
      setComment('');
      setErrors(null);
      const newComments = await dispatch(getAllCommentsThunk(post.id));
      setUpdatedComments(newComments);
    }
  };
  
  return (
    <div className="comments-list-container">
      <div className="comment-form-container">
        <div className="profile-pic">{sessionUser.username[0].toLowerCase()}</div>
        <form className="comment-form" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder={`Reply as @${sessionUser.username}`}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            />
          <button className="input-icon">
            <LuSendHorizonal />
          </button>
          {errors && <p>{errors}</p>}
        </form>
      </div>
      <div className="comments">
        {updatedComments.map((comment, idx) => (
          <div key={`${idx}-${comment.post_id}`} className="comment-tile">
            <CommentTile users={users} comment={comment}/>
          </div>
        ))}

      </div>
    </div>
  )
}

export default CommentsList
