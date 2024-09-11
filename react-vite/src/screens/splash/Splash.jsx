import SideMenu from '../../components/SideMenu';
import PostList from '../../components/PostList';
import SideImages from '../../components/SideImages';
import './Splash.css'

const Splash = () => {

  return (
    <main className='splash-main'>
      <SideMenu />
      <PostList />
      <SideImages />
    </main>
  )

}

export default Splash;
