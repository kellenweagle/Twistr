import './CommentTile.css'
import { getCommentsThunk } from '../../redux/comments';
import { getAllPostsThunk } from '../../redux/posts';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function CommentTile() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.postState.allPosts);
  const comments = useSelector((state) => state.commentState.allComments)

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const getData = async() => {
      await dispatch(getAllPostsThunk());
      await dispatch(getCommentsThunk(posts.id));
      setIsLoaded(true);
    }

    if(!isLoaded && !posts.length) {
      getData()
    }
  }, [dispatch, posts, isLoaded, comments])

  return (
    <div className='comment-tile'>
      <h1>{comments.comment}</h1>
    </div>
  )
}

export default CommentTile;