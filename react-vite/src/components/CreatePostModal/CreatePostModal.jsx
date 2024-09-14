import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import { createPostThunk } from "../../redux/posts";
import './createPostModal.css'





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
    <div className="create-post">
      <p className="create-h1">{user.username}</p>
      <form className='form' onSubmit={(e) => handleSubmit(e)}>
        <div>
        <label className="label-input post">
          
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
        <button className="post-now" >Post</button>
      </form>
    </div>
  );
}

export default CreatePostModal;
