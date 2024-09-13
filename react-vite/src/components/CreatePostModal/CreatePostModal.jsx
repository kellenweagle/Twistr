import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import createPostThunk from '../../redux/posts'



function CreatePostModal() {
  const dispatch = useDispatch();
  const [post, setPost] = useState("");
  const user = useSelector(state => state.session.user)

  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();


    const newPostData = ({
        user_id: user.id,
        post: post
    })

    const newPost = await dispatch(createPostThunk(newPostData))
        
        if (!newPost.ok && newPost.ok !== undefined) {
            const data = await newPost.json();
            
            setErrors(data.message)
        } else {

            closeModal()
        }


   

    
  };

  return (
    <>
      <h1>Create a Post</h1>
      <form onSubmit={handleSubmit}>
        <label>
          post
          <input
            type="text"
            value={post}
            onChange={(e) => setPost(e.target.value)}
            required
          />
        </label>
        {errors.post && <p>{errors.post}</p>}
        <button >Create Post</button>
      </form>
    </>
  );
}

export default CreatePostModal;
