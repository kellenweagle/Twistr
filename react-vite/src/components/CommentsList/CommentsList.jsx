import CommentTile from '../CommentTile'
import { LuSendHorizonal } from "react-icons/lu";

import './CommentsList.css'

const CommentsList = (comments) => {
  comments = comments.comments;

  // console.log(comments.comments, 'comment in list')

  return (
    <div className="comments-list-container">
      <div className="comment-form-container">
        <div className="profile-pic">P</div>
        <form action="" className="comment-form">
          <input type="text" placeholder='Reply as @Roykinn'/>
          <div className="input-icon">
            <LuSendHorizonal />
          </div>
        </form>
      </div>
      <div className="comments">
        {comments.map((comment, idx) => (
          <div key={`${idx}-${comment.post_id}`} className="comment-tile">
            <CommentTile comment={comment}/>
          </div>
        ))}

      </div>
    </div>
  )
}

export default CommentsList
