import './SideImages.css'

const SideImages = () => {
  return (
    <div className="side-image-container">
      <h3>Check out these blogs</h3>
      <div className="blog-list">
        <div className='blog-link'>
          <span className='blog-photo-and-text'>
            <img className="blog-photo" src="https://toginet.com/images/twistr/images/blog-1.png" alt=""/>
            <div className='blog-name-text'>
              <p className='blog-username'>normal-horoscopes</p>
              <p className='blog-name'>Normal Horoscopes</p>
            </div>
          </span>
          <button className='blog-follow-button'>Follow</button>
        </div>
        <div className='blog-link'>
          <span className='blog-photo-and-text'>
            <img className="blog-photo" src="https://toginet.com/images/twistr/images/blog-2.jpg" alt=""/>
            <div className='blog-name-text'>
              <p className='blog-username'>infected</p>
              <p className='blog-name'>Infected</p>
            </div>
          </span>
          <button className='blog-follow-button'>Follow</button>
        </div>
        <div className='blog-link'>
          <span className='blog-photo-and-text'>
            <img className="blog-photo" src="https://toginet.com/images/twistr/images/blog-3.jpg" alt=""/>
            <div className='blog-name-text'>
              <p className='blog-username'>picsthathmm</p>
              <p className='blog-name'>Pics that "hmm"</p>
            </div>
          </span>
          <button className='blog-follow-button'>Follow</button>
        </div>
        <div className='blog-link'>
          <span className='blog-photo-and-text'>
            <img className="blog-photo" src="https://toginet.com/images/twistr/images/blog-4.jpg" alt=""/>
            <div className='blog-name-text'>
              <p className='blog-username'>sweettoothgirl</p>
              <p className='blog-name'>Sweet Tooth Girl</p>
            </div>
          </span>
          <button className='blog-follow-button'>Follow</button>
        </div>
      </div>
      <button className='explore-button-right'>Explore all of Twistr</button>
      <h3>Radar</h3>
    </div>
  )
}

export default SideImages
