import { useSelector, useDispatch } from 'react-redux';
import { getAllUsersThunk } from '../../redux/user';
import { getAllCommentsThunk } from '../../redux/comments';
import './PostTile.css';
import { useEffect, useState, useRef } from 'react';
import { BsThreeDots } from "react-icons/bs";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import CommentsList from '../CommentsList';
// import { deletePostThunk } from '../../redux/posts';

const PostTile = (post) => {
  post = post.post
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  const [commentsLoading, setCommentsLoading] = useState(false);
  const [showComments, setShowComments] = useState(false);
  // const ulRef = useRef();
  let users = useSelector(state => state.userState.allUsers);
  let comments = useSelector((state) => state.commentsState.allComments)

  const handleCommentToggle = () => {
    // e.stopPropagation();
    setShowComments(!showComments);
  };

  useEffect(() => {

      const getData = async () => {
        setCommentsLoading(true);
        await dispatch(getAllUsersThunk());
        await dispatch(getAllCommentsThunk(post.id));
        setLoaded(true);
        setCommentsLoading(false);
      };
      if (!loaded || showComments) {
        getData();
      }

  }, [dispatch, loaded, post.id, showComments]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   await dispatch(deletePostThunk(post.id))

  // };

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
          <FaRegComment className="comment" onClick={handleCommentToggle}/>
          <FaRegHeart className='like'/>
        </div>
        {/* <button onClick={handleSubmit}>DELETE</button> */}
      </div>
      {showComments ? <div className='comments-list-dropdown'>
        {commentsLoading ? (
          <p>Loading comments...</p>
        ) : (
          <CommentsList className="comments-list" comments={comments}/>
        )}
      </div> : null}
    </div>
  )
}

export default PostTile
