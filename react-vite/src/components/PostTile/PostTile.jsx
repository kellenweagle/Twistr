import { useSelector, useDispatch } from 'react-redux';
import './PostTile.css';
import { useState, useEffect } from 'react';
import { BsThreeDots } from "react-icons/bs";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import CommentsList from '../CommentsList';
import { deletePostThunk } from '../../redux/posts';
import UpdatePost from '../UpdatePost';
import OpenModalButton from '../OpenModalButton/OpenModalButton';
import { createLikeThunk, deleteLikeThunk, getAllLikesThunk } from '../../redux/likes';

const PostTile = ({users, post}) => {
  const dispatch = useDispatch();
  const [showComments, setShowComments] = useState(false);
  const [heartAnimation, setHeartAnimation] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  let likes = useSelector((state) => state.likesState.allLikes)
  const sessionUser = useSelector((state) => state.session.user)
  const updateId = post.id

  const handleCommentToggle = () => {
    setShowComments(!showComments);
  };

  const handleOptionsToggle = () => {
    setShowOptions(!showOptions);
  }

  useEffect(() => {
    const getData = async () => {
      await dispatch(getAllLikesThunk())
      setLoaded(true);
    };
    if (!loaded || showComments) {
      getData();
    }
  }, [dispatch, loaded, post.id, showComments]);

  const handleLike = async (e) => {
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

  if (!post || !users || !likes || users.length === 0) {

    return <h1>Loading...</h1>
  }

  let user = users.find((user) => user.id === post.user_id);
  let like = likes.filter((like) => like.post_id == post.id)


  const userLikedPost = sessionUser ? likes.some(like => like.user_id === sessionUser.id) : null;


  if (!user) return <h1>User not found</h1>;
  const likeCount = like.length;

  return (
    <div className="post-container">
      <div className="post-header">
        <div className="post-header-left">
          <div className="profile-pic">{user.username[0].toLowerCase()}</div>
          <div className="post-info">
            <div className="username">{user.username.toLowerCase()}</div>
          </div>
        </div>
        {sessionUser.id === user.id ? (
        showOptions ? <div className='options-list-tab'>
          <OpenModalButton
              className='update-post-button'
              buttonText={<><span style={{color: 'black'}}>UPDATE</span></>}
              modalComponent={<UpdatePost postid={updateId} />} />
          <button className='delete-post-button' onClick={handleDelete}>DELETE</button>
          <div className="post-options">
            <BsThreeDots className='post-options-dots' onClick={handleOptionsToggle}/>
          </div>
        </div> : <div className="post-options">
            <BsThreeDots className='post-options-dots' onClick={handleOptionsToggle}/>
          </div>) : null}
      </div>
      <div className='post-image-container'>
        {post.image_one ? <img className='post-image' src={post.image_one} /> : null}
        {post.image_two ? <img className='post-image' src={post.image_two} /> : null}
        {post.image_three ? <img className='post-image' src={post.image_three} /> : null}
        {post.image_four ? <img className='post-image' src={post.image_four} /> : null}
      </div>
      <div className="post-main">
        <pre>{post.post}</pre>
      </div>
      <div className="post-footer">
        <button className="likes-count"><span>{likeCount}</span> likes</button>
        <div className="like-comment">
          <FaRegComment className="comment" onClick={handleCommentToggle} />
          <FaRegHeart className={`like ${userLikedPost ? 'liked' : ''} ${heartAnimation ? 'jump' : ''}`} onClick={e => handleLike(e)} />
        </div>
      </div>
      {showComments ? <div className='comments-list-dropdown'>
        <CommentsList className="comments-list" post={post} users={users}/>
      </div> : null}
    </div>
  )
}

export default PostTile;
