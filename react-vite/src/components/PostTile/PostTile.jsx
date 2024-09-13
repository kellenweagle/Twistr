import './PostTile.css';

const PostTile = (post) => {
  post = post.post

  if(!post) {
    return <h1>Loading...</h1>
  }
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="post-header-left">
          <div className="profile-pic">P</div>
          <div className="post-info">
            <div className="username">Jon Smith</div>
            <div className="post-date">tbd</div>
          </div>
        </div>
        <div className="post-options">...</div>
      </div>
      <div className="post-main">{post.post}</div>
    </div>
  )
}

export default PostTile
