import { useSelector, useDispatch } from 'react-redux';
import { getAllUsersThunk } from '../../redux/user';
import { getAllCommentsThunk } from '../../redux/comments';
import './PostTile.css';
import { useEffect, useState, useRef } from 'react';
import { BsThreeDots } from "react-icons/bs";
import { FaRegComment, FaRegHeart } from "react-icons/fa";

import CommentTile from '../CommentTile/CommentTile';
import { deletePostThunk } from '../../redux/posts';


const PostTile = ({post}) => {
  
  console.log(post, 'post------------------')
  
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const ulRef = useRef();
  let users = useSelector(state => state.userState.allUsers);
  let comments = useSelector((state) => state.commentsState.allComments)

  const toggleComments = (e) => {
    e.stopPropagation();
    setShowComments(!showComments);
  };

  useEffect(() => {
    if (!showComments) return;

    const closeComments = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowComments(false)
      }
    };

    document.addEventListener('click', closeComments);

    return () => document.removeEventListener('click', closeComments);
  }, [showComments])

  const closeComments = () => setShowComments(false);

  useEffect(() => {
    
      const getData = async () => {
        await dispatch(getAllUsersThunk());
        await dispatch(getAllCommentsThunk(post.id));
        setLoaded(true);
      };
      if (!loaded) {
        getData();

      }
    
  }, [dispatch, loaded]);
  // post = post.post
  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(deletePostThunk(post.id))

  };

  if(!post || !users || users.length === 0) {
    return <h1>Loading...</h1>
  }

  let user = users.find((user) => user.id === post.user_id);

  if(!user) return <h1>User not found</h1>;

  const commentBtnClassName = 'comment' + (showComments ? 'comment-list-active' : 'hidden')

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
          <FaRegComment className={commentBtnClassName} onClick={toggleComments}/>
          <FaRegHeart className='like'/>
        </div>
        <button
      onClick={handleSubmit}>DELETE</button>
      </div>

        <CommentTile post={post}/>

    </div>
  )
}

export default PostTile
