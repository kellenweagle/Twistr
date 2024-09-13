import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import { createPostThunk } from "../../redux/posts";





function CreatePostModal() {
  const dispatch = useDispatch();
  const [post, setPost] = useState("");
  const user = useSelector(state => state.session.user)

  const [errors, setErrors] = useState();
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();


    const newPostData = ({
        
        post: post
    })
    console.log(newPostData, 'post data')

    const newPost = await dispatch(createPostThunk(newPostData))
    console.log(newPost, 'post after dispatch')
        
        if (newPost) {
            
            
            setErrors(newPost)
        } else {
            
          closeModal()
        }


   

    
  };

  return (
    <>
      <h1>Create a Post</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          post
          <input
            type="text"
            value={post}
            onChange={(e) => setPost(e.target.value)}
            required
          />
        </label>
        {errors && <p>{errors}</p>}
        <button >Create Post</button>
      </form>
    </>
  );
}

export default CreatePostModal;
