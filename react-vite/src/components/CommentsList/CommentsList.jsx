import { LuSendHorizonal } from "react-icons/lu";
import CommentTile from '../CommentTile'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './CommentsList.css'
import { createCommentThunk, getAllCommentsThunk} from "../../redux/comments";
import { getAllUsersThunk } from "../../redux/user";

const CommentsList = ({post, users}) => {
  const sessionUser = useSelector(state => state.session.user)
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');
  const [updatedComments, setUpdatedComments] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [errors, setErrors] = useState();
  const comments = useSelector((state) => state.commentsState.allComments);

  useEffect(() => {
    const getData = async () => {
      const res = await dispatch(getAllCommentsThunk(post.id));
      await dispatch(getAllUsersThunk())
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

    await dispatch(getAllUsersThunk())

    if (newComment.errors) {
      setErrors(newComment.errors)
    } else {
      setComment('');
      setErrors(null);
      // const newComments = await dispatch(getAllCommentsThunk(post.id));
      // setUpdatedComments(newComments);
    }
  };

  if (!isLoaded) {
    return <div className="spinner-container">
      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
  }

  return (
    <div className="comments-list-container">
      {!sessionUser ? null : (
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

      )}
      <div className="comments">
        {comments.map((comment, idx) => (
          <div key={`${idx}-${comment.post_id}`} className="comment-tile">
            <CommentTile users={users} post={post} comment={comment}/>
          </div>
        ))}

      </div>
    </div>
  )
}

export default CommentsList
