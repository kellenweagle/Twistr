import './CommentTile.css'
import { getUserByIdThunk } from '../../redux/user';
import { BsThreeDots } from "react-icons/bs";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function CommentTile(comment) {
  comment = comment.comment
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  let user = useSelector(state => state.userState.userDetails);
  const [userDetails, setUserDetails] = useState(user);

  useEffect(() => {
    const getData = async () => {
      await dispatch(getUserByIdThunk(comment.user_id));
      setIsLoaded(true);
      setUserDetails(user)
      console.log('user insside useeffect', user)
    }
    if (!isLoaded) {
      getData();
    }
  }, [comment.user_id, dispatch, isLoaded, user])

  if(!user) return <h1>User not found</h1>;

  console.log('end of commenttile userDetails', userDetails)
  return (
    <div className='comment-tile-container'>
      <div className='profile-pic-comment'>{userDetails.username[0].toUpperCase()}</div>
      <div className='comment-main'>
        <div className='comment-left'>
          <div className='comment-top-line'>
            <div className='comment-username'>{userDetails.username.toLowerCase()}</div>
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
