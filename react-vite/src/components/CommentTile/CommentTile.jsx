import './CommentTile.css'
import { getAllPostsThunk } from '../../redux/posts';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllUsersThunk } from '../../redux/user';
import { useSelector } from 'react-redux';
import { BsThreeDots } from "react-icons/bs";

function CommentTile({comment, post}) {
  post = post.post
  console.log(comment, 'comment')
  const users = useSelector(state => state.userState.allUsers);
  let comments = useSelector((state) => state.commentsState.allComments)

  
  
  const dispatch = useDispatch();

  const [isLoaded, setIsLoaded] = useState(false)



  

  let user = users.find((user) => user.id === comment.user_id);

  if(!user) return <h1>User not found</h1>;

  return (
    <div className='comment-tile'>
      <div className='profile-pic-comment'>{user.username[0].toUpperCase()}</div>
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