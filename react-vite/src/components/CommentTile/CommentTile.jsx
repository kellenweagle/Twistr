import './CommentTile.css'
import { getUserByIdThunk } from '../../redux/user';
import { BsThreeDots } from "react-icons/bs";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function CommentTile({users, comment}) {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const sessionUser = useSelector(state => state.session.user)

  const handleCommentToggle = () => {
    setShowOptions(!showOptions);
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

  let user = users.find((user) => user.id === comment.user_id);

  return (
    <div className='comment-tile-container'>
      <div className='profile-pic-comment'>{user.username[0].toLowerCase()}</div>
      <div className='comment-main'>

        <div className='comment-top-line'>
          <div className='comment-username'>{user.username.toLowerCase()}</div>
          {sessionUser.id === user.id ? (
        showOptions ? <div className='options-list-tab'>
          <button className="edit-comment">Edit</button>
          <button className="delete-comment">Delete</button>
          <div className="comment-options">
            <BsThreeDots className='comment-options-dots' onClick={handleCommentToggle}/>
          </div>
        </div> : <div className="comment-options">
            <BsThreeDots className='comment-options-dots' onClick={handleCommentToggle}/>
          </div>) : null}
        </div>
        <div className='comment-text'>{comment.comment}</div>
      </div>
    </div>
  )
}

export default CommentTile;
