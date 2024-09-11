import { IoTextSharp } from "react-icons/io5";
import { FaCameraRetro } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
import './PostList.css'

const PostList = () => {
  return (
    <div className="post-list-container">

      <ul className="create-menu">
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

    </div>
  )
}

export default PostList
