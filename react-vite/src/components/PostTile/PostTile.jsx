import { useSelector, useDispatch } from 'react-redux';
import { getAllUsersThunk } from '../../redux/user';
import './PostTile.css';
import { useEffect, useState } from 'react';

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
            <div className="username">{user.username}</div>
            <div className="post-date">tbd</div>
          </div>
        </div>
        <div className="post-options">...</div>
      </div>
      <div className="post-main">{post.post}</div>
    </div>
  )
}

export default PostTile
