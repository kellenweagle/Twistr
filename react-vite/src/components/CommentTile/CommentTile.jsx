import './CommentTile.css'
import { getAllPostsThunk } from '../../redux/posts';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllUsersThunk } from '../../redux/user';
import { useSelector } from 'react-redux';
import { BsThreeDots } from "react-icons/bs";

function CommentTile(post) {
  post = post.post
  const users = useSelector(state => state.userState.allUsers);

  const comment = {
    comment: "This is a test comment",
    user_id: 1,
    post_id: 1
  }
  
  const dispatch = useDispatch();

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if(!isLoaded) {
      const getData = async() => {
        await dispatch(getAllPostsThunk());
        await dispatch(getAllUsersThunk());
        setIsLoaded(true);
      }
      getData()
    }
  }, [dispatch, post, isLoaded]);

  let user = users.find((user) => user.id === post.user_id);

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