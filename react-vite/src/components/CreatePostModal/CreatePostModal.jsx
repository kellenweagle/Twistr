import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import { createPostThunk } from "../../redux/posts";
import { getAllUsersThunk } from "../../redux/user";
import './createPostModal.css'

function CreatePostModal() {
  const dispatch = useDispatch();
  const [post, setPost] = useState("");
  const [imageOne, setImageOne] = useState("")
  const [imageTwo, setImageTwo] = useState("")
  const [imageThree, setImageThree] = useState("")
  const [imageFour, setImageFour] = useState("")
  const user = useSelector(state => state.session.user)

  const [errors, setErrors] = useState();
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const newPostData = ({
      post: post,
      image_one: imageOne,
      image_two: imageTwo,
      image_three: imageThree,
      image_four: imageFour
    })

    const newPost = await dispatch(createPostThunk(newPostData))
    await dispatch(getAllUsersThunk())

    if (newPost) {
      setErrors(newPost)
    } else {
      closeModal()
    }
  };

  return (
    <div className="create-post">
      <p className="create-post-username">{user.username.toLowerCase()}</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label className="form">
            <textarea
              className="post-input"
              type="text"
              value={post}
              placeholder="Go ahead, put anything."
              onChange={(e) => setPost(e.target.value)}
              required
            />
          </label>
          {errors && <p>{errors}</p>}
        </div>
        <div>
          <label className="label-input">
            <textarea
              className="image-input"
              type="text"
              value={imageOne}
              placeholder="Image"
              onChange={(e) => setImageOne(e.target.value)}
            />
          </label>
          {errors && <p>{errors}</p>}
        </div>
        <div>
          <label className="label-input">
            <textarea
              className="image-input"
              type="text"
              value={imageTwo}
              placeholder="Image"
              onChange={(e) => setImageTwo(e.target.value)}
            />
          </label>
          {errors && <p>{errors}</p>}
        </div>
        <div>
          <label className="label-input">
            <textarea
              className="image-input"
              type="text"
              value={imageThree}
              placeholder="Image"
              onChange={(e) => setImageThree(e.target.value)}
            />
          </label>
          {errors && <p>{errors}</p>}
        </div>
        <div>
          <label className="label-input">
            <textarea
              className="image-input"
              type="text"
              value={imageFour}
              placeholder="Image"
              onChange={(e) => setImageFour(e.target.value)}
            />
          </label>
          {errors && <p>{errors}</p>}
        </div>
        <button className="post-now">Post</button>
      </form>
    </div>
  );
}

export default CreatePostModal;
