import './CommentTile.css'
import { getUserByIdThunk } from '../../redux/user';
import { BsThreeDots } from "react-icons/bs";
import { LuSendHorizonal } from "react-icons/lu";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCommentThunk } from '../../redux/comments';
import { updateCommentThunk } from '../../redux/comments';

function CommentTile({users, post, comment}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user)
  const comments = useSelector(state => state.commentsState.allComments)
  const [isLoaded, setIsLoaded] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [showUpdateField, setShowUpdateField] = useState(false);
  const [currComment, setCurrComment] = useState({comment: comment.comment})
  const sessionUser = useSelector(state => state.session.user)
  const commentsState = useSelector(state => state.commentsState.allComments)


  const handleCommentToggle = () => {
    setShowOptions(!showOptions);
  }

  const handleUpdateFieldToggle = () => {
    setShowUpdateField(!showUpdateField)
  }

  useEffect(() => {
    const getData = async () => {
      await dispatch(getUserByIdThunk(comment.user_id));
      setIsLoaded(true);
    }
    if (!isLoaded) {
      getData();
    }
  }, [comment.user_id, dispatch, isLoaded])


  const handleDelete = async(e) => {
    e.preventDefault()
    e.stopPropagation()

    await dispatch(deleteCommentThunk(post.id, comment.id))
  }

  const updateComment = (val) => {
    setCurrComment({comment: val})
    console.log('updatecomm', val)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(updateCommentThunk(post.id, comment.id, currComment));
    setShowUpdateField(false)
  }

  let user = users.find((user) => user.id === comment.user_id);

  return (
    <div className='comment-tile-container'>
      <div className='profile-pic-comment'>{user.username[0].toLowerCase()}</div>
      <div className='comment-main'>

        <div className='comment-top-line'>
          <div className='comment-username'>{user.username.toLowerCase()}</div>
          {!sessionUser ? null : (
            sessionUser.id === user.id ? (
          showOptions ? <div className='options-list-tab'>
            <button className="edit-comment" onClick={handleUpdateFieldToggle}>Edit</button>
            <button onClick={handleDelete} className="delete-comment">Delete</button>
            <div className="comment-options">
              <BsThreeDots className='comment-options-dots' onClick={handleCommentToggle}/>
            </div>
          </div> : <div className="comment-options">
              <BsThreeDots className='comment-options-dots' onClick={handleCommentToggle}/>
            </div>) : null
          )}
        </div>
        {showUpdateField ? (
        <div className='comment-text'>
          <form className='comment-update-form' onSubmit={handleSubmit}>
            <input
              type="text"
              value={currComment.comment}
              placeholder='comment editing'
              onChange={(e) => updateComment(e.target.value, 'comment')}
            />
            <button className="input-icon">
                <LuSendHorizonal />
              </button>
          </form>
        </div>
         ) : (
         <div className='comment-text'>{comment.comment}</div>)}
      </div>
    </div>
  )
}

export default CommentTile;
