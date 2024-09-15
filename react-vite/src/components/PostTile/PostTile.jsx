import { useSelector, useDispatch } from 'react-redux';
import { getAllUsersThunk } from '../../redux/user';
import { getAllCommentsThunk } from '../../redux/comments';
import './PostTile.css';
import { useEffect, useState, } from 'react';
import { BsThreeDots } from "react-icons/bs";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import CommentsList from '../CommentsList';
import { deletePostThunk } from '../../redux/posts';
import UpdatePost from '../UpdatePost';
import OpenModalButton from '../OpenModalButton/OpenModalButton';
import { createLikeThunk, deleteLikeThunk, getAllLikesThunk } from '../../redux/likes';

const PostTile = (post) => {
  post = post.post
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  const [commentsLoading, setCommentsLoading] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [heartAnimation, setHeartAnimation] = useState(false);
  let users = useSelector(state => state.userState.allUsers);
  let comments = useSelector((state) => state.commentsState.allComments)
  let likes = useSelector((state) => state.likesState.allLikes)
  const sessionUser = useSelector((state) => state.session.user)
  const updateId = post.id
  
  const handleCommentToggle = () => {
    setShowComments(!showComments);
  };
  
  useEffect(() => {

      const getData = async () => {
        setCommentsLoading(true);
        await dispatch(getAllUsersThunk());
        await dispatch(getAllCommentsThunk(post.id));
        await dispatch(getAllLikesThunk())
        setLoaded(true);
        setCommentsLoading(false);
      };
      if (!loaded || showComments) {
        getData();
      }

  }, [dispatch, loaded, post.id, showComments]);

  const handleLike = async(e) => {
    e.preventDefault()
    e.stopPropagation();
    
    let likesOnPost = likes.filter(like => like.post_id === post.id)
    let userLiked = likesOnPost.filter(like => like.user_id === sessionUser.id)
    
    if (!userLiked.length) {
      await dispatch(createLikeThunk(post.id))
      
    } else {
      await dispatch(deleteLikeThunk(post.id))
    }
    // Trigger animation
    setHeartAnimation(true);
    setTimeout(() => setHeartAnimation(false), 300); // Reset animation state
  
    
  }

  const handleDelete = async (e) => {
    e.preventDefault();

    await dispatch(deletePostThunk(post.id))

  };

  if(!post || !users || !likes || users.length === 0) {
    return <h1>Loading...</h1>
  }

  let user = users.find((user) => user.id === post.user_id);
  let like = likes.filter((like) => like.post_id == post.id)
  const userLikedPost = likes.some(like => like.user_id === sessionUser.id);
  if(!user) return <h1>User not found</h1>;
  const likeCount = like.length;

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
      <div className='post-image-container'>
        {post.images.length ? post.images.map((image, idx) => (
          <div 
          className='post-image-url'
          >
          <img className='post-image' src={image.url}/>
          </div>
        )) : null}
      </div>
      <div className="post-main">
        <pre>{post.post}</pre>
      </div>
      <div className="post-footer">
        <button className="likes-count"><span>{likeCount}</span> likes</button>
        <div className="like-comment">
          <FaRegComment className="comment" onClick={handleCommentToggle}/>
          <FaRegHeart className={`like ${userLikedPost ? 'liked' : ''} ${heartAnimation ? 'jump' : ''}`} onClick={e => handleLike(e)} /> 
        </div>
      </div>
      <div className='manage-post'>
        {sessionUser ? (
          sessionUser.id === post.user_id ?
            (<button className='delete-post-button' onClick={handleDelete}>DELETE</button>)
            : (null)) : null }
        {sessionUser ? (
          sessionUser.id === post.user_id ?
          (<OpenModalButton
             className='update-post-button'
             buttonText={<><span>UPDATE</span></>}
             modalComponent={<UpdatePost postid={updateId}/>}/>)
             : (null)) : null }

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

export default PostTile;
