import './UpdatePost.css'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPostsThunk, updatePostThunk } from '../../redux/posts';
import { useModal } from "../../context/Modal";


const UpdatePost = (postId) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  const { closeModal } = useModal();
  const [errors, setErrors] = useState();

  let postUpdateId;

  for(let val in postId) {
    postUpdateId = postId[val]
  }

  const postToUpdate = useSelector(state => state.postState.byId[postUpdateId])

  const [post, setPost] = useState({post: postToUpdate.post,
    image_one: postToUpdate.image_one,
    image_two: postToUpdate.image_one,
    image_three: postToUpdate.image_one,
    image_four: postToUpdate.image_one,

  });
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const getData = async () => {
      await dispatch(getOnePostThunk(postUpdateId, post));
      await dispatch(getAllPostsThunk())

      setLoaded(true);
    }

    if(!loaded) {
      getData();
    }

    if(postToUpdate) {
      updatePost(postToUpdate.post, 'post')
      updatePost(postToUpdate.image_one, 'image_one')
      updatePost(postToUpdate.image_two, 'image_two')
      updatePost(postToUpdate.image_three, 'image_three')
      updatePost(postToUpdate.image_four, 'image_four')
    }

  }, [setLoaded])

  const updatePost = (val, key) => {
    return setPost((prev) => {
      const newPrev = { ...prev };
      newPrev[key] = val
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
        <div>
          <label className="label-input">
            <textarea
              className="image-input"
              type="text"
              value={post.image_one}
              placeholder="Image"
              onChange={(e) => updatePost(e.target.value, 'image_one')}
            />
          </label>
          {errors && <p>{errors}</p>}
        </div>
        <div>
          <label className="label-input">
            <textarea
              className="image-input"
              type="text"
              value={post.image_two}
              placeholder="Image"
              onChange={(e) => updatePost(e.target.value, 'image_two')}
            />
          </label>
          {errors && <p>{errors}</p>}
        </div>
        <div>
          <label className="label-input">
            <textarea
              className="image-input"
              type="text"
              value={post.image_three}
              placeholder="Image"
              onChange={(e) => updatePost(e.target.value, 'image_three')}
            />
          </label>
          {errors && <p>{errors}</p>}
        </div>
        <div>
          <label className="label-input">
            <textarea
              className="image-input"
              type="text"
              value={post.image_four}
              placeholder="Image"
              onChange={(e) => updatePost(e.target.value, 'image_four')}
            />
            </label>
          {errors && <p>{errors}</p>}
        </div>
        <button className="post-now">Post</button>
      </form>
    </div>
  )
}

export default UpdatePost
