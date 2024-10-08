import { NavLink } from "react-router-dom";
import { FaSearch } from 'react-icons/fa'
import "./Navigation.css";

function Navigation() {
    const featureAlert = (e) => {
      e.preventDefault();
      alert("Feature coming soon!")
    };

  return (
    <nav className ='nav-bar'>
      <ul className="nav-list">
        <li>
          <NavLink to="/" className='nav-logo'>
            <img src="https://toginet.com/images/twistr/images/nav-logo.svg" alt="" />
          </NavLink>
        </li>
        <li>
          <div onClick={featureAlert} className="post-menu">
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
          <form onClick={featureAlert} className='search-form' action="">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search Twistr" name='search' className="search"/>
          </form>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
