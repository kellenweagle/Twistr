import { IoTextSharp } from "react-icons/io5";
import { FaCameraRetro } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
import './PostList.css';
import PostTile from "../PostTile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllPostsThunk } from "../../redux/posts";
import { getAllUsersThunk } from "../../redux/user";


const PostList = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  let posts = useSelector(state => state.postState.allPosts);
  let users = useSelector(state => state.userState.allUsers)

  useEffect(() => {
    const getData = async () => {
      await dispatch(getAllPostsThunk());
      await dispatch(getAllUsersThunk());
      setIsLoaded(true);
    }
    if (!isLoaded && !posts.length) {
      getData()
    }
  }, [dispatch, isLoaded, posts])

  if (!posts) {
    return <h1>Loading</h1>
  }

  const featureAlert = (e) => {
    e.preventDefault();
    alert("Feature coming soon!")
  };

  return (
    <div className="post-list-container">
      <ul onClick={featureAlert} className="create-menu">
        <li className="post-text">
          <IoTextSharp className="create-icon" />
          Text
        </li>
        <li className="post-photo">
          <FaCameraRetro className="create-icon" />
          Photo
        </li>
        <li className="post-quote">
          <FaQuoteLeft className="create-icon" />
          Quote
        </li>
        <li className="post-link">
          <FaLink className="create-icon" />
          Link
        </li>
        <li className="post-chat">
          <IoChatboxEllipses className="create-icon" />
          Chat
        </li>
        <li className="post-audio">
          <FaHeadphonesSimple className="create-icon" />
          Audio
        </li>
        <li className="post-video">
          <FaVideo className="create-icon" />
          Video
        </li>
      </ul>
      <div className="posts">
        {posts.map((post, idx) => (
          <div key={`${idx}-${post.user_id}`} className="post-tile">
            <PostTile post={post} users={users}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostList
