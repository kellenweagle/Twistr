import { NavLink } from "react-router-dom";
// import ProfileButton from "./ProfileButton";
import "./Navigation.css";
// import { FaSearch } from "react-icons/fa";
import { FaSearch } from 'react-icons/fa'

function Navigation() {
  return (
    <nav className ='nav-bar'>
      <ul className="nav-list">
        <li>
          <NavLink to="/" className='nav-logo'>
            <img src="../../images/nav-logo.svg" alt="" />
          </NavLink>
        </li>
        <li>
          <div className="post-menu">
            <NavLink className='menu-link' to='/'>
              <h2>For you</h2>
            </NavLink>
            <NavLink className='menu-link' to='/'>
              <h2>Following</h2>
            </NavLink>
            <NavLink className='menu-link' to='/'>
              <h2>Your tags</h2>
            </NavLink>
          </div>
        </li>

        <li>
          <form className='search-form' action="">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search Twistr" name='search' className="search"/>
          </form>
          {/* <ProfileButton /> */}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
