import SideMenu from '../../components/SideMenu';
import PostList from '../../components/PostList';
import SideImages from '../../components/SideImages';
import './Splash.css'

const Splash = () => {

  return (
    <main className='splash-main'>
      <SideMenu className='side-menu'/>
      <PostList />
      <SideImages className='side-images'/>
    </main>
  )

}

export default Splash;
