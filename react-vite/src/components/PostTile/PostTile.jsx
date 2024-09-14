import { useSelector, useDispatch } from 'react-redux';
import { getAllUsersThunk } from '../../redux/user';
import './PostTile.css';
import { useEffect, useState } from 'react';
import { BsThreeDots } from "react-icons/bs";
import { FaRegComment, FaRegHeart } from "react-icons/fa";

const PostTile = (post) => {
  post = post.post
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  let users = useSelector(state => state.userState.allUsers);

  useEffect(() => {
    if (!isLoaded) {
      const getData = async () => {
        await dispatch(getAllUsersThunk());
        setIsLoaded(true);
      };
      getData();
    }
  }, [dispatch, isLoaded]);

  if(!post || !users || users.length === 0) {
    return <h1>Loading...</h1>
  }

  let user = users.find((user) => user.id === post.user_id);

  if(!user) return <h1>User not found</h1>;


  return (
    <div className="post-container">
      <div className="post-header">
        <div className="post-header-left">
          <div className="profile-pic">{user.username[0].toUpperCase()}</div>
          <div className="post-info">
            <div className="username">{user.username.toLowerCase()}</div>
            <div className="post-date">Aug 17</div>
          </div>
        </div>
        <div className="post-options"><BsThreeDots className='post-options-dots'/></div>
      </div>
      <div className="post-main">
        <pre>{post.post}</pre>
      </div>
      <div className="post-footer">
        <button className="likes-count"><span>32</span> likes</button>
        <div className="like-comment">
          <FaRegComment className='comment'/>
          <FaRegHeart className='like'/>
        </div>
      </div>
    </div>
  )
}

export default PostTile
