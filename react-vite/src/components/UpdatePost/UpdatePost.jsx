import './UpdatePost.css'
import { isValidElement, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPostsThunk, updatePostThunk, getOnePostThunk } from '../../redux/posts';
import { useModal } from "../../context/Modal";


const UpdatePost = (postId) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  const [loaded, setLoaded] = useState(false);
  const { closeModal } = useModal();

  let postUpdateId;

  for(let val in postId) {
    postUpdateId = postId[val]
    console.log(postUpdateId)
  }

  const postToUpdate = useSelector(state => state.postState.byId[postUpdateId])

  console.log(postToUpdate, '-----------post to update')

  const [post, setPost] = useState({post: postToUpdate.post});

  // useEffect(() => {
  //   const getData = async () => {
  //     await dispatch(getOnePostThunk(postUpdateId, post));
  //     await dispatch(getAllPostsThunk())

  //     setLoaded(true);
  //   }

  //   if(!loaded) {
  //     getData();
  //   }

  //   if(postToUpdate) {
  //     updatePost(postToUpdate.post, 'post')
  //   }

  // }, [setLoaded])

  const updatePost = (val, key) => {
    return setPost((prev) => {
      const newPrev = { ...prev };
      newPrev[key] = val
      console.log(newPrev[key], "this is the value")
      return newPrev
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(updatePostThunk(postUpdateId, post))

    await dispatch(getAllPostsThunk())
    .then(closeModal)

  }

  return (
    <div className="create-post">
      <p className="create-post-username">{user.username.toLowerCase()}</p>
      <form className='form' onSubmit={handleSubmit}>
        <div>
        <label className="label-input">
          <textarea
            className="post-input"
            type="text"
            value={post.post}
            placeholder="Go ahead, put anything."
            onChange={(e) => updatePost(e.target.value, "post")}
            required
          />
        </label>
        </div>
        <button className="post-now">Post</button>
      </form>
    </div>
  )
}

export default UpdatePost
