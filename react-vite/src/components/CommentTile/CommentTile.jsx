import './CommentTile.css'
import { getUserByIdThunk } from '../../redux/user';
import { BsThreeDots } from "react-icons/bs";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

function CommentTile({users, comment}) {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

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
        <div className='comment-left'>
          <div className='comment-top-line'>
            <div className='comment-username'>{user.username.toLowerCase()}</div>
            <div className='comment-date'>Aug 17</div>
          </div>
          <div className='comment-text'>{comment.comment}</div>
        </div>
        <div className="comment-options"><BsThreeDots className='comment-options-dots'/></div>
      </div>
    </div>
  )
}

export default CommentTile;
