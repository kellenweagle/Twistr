import { useState, useEffect } from "react";
import { useRef } from "react";
import { GoHomeFill } from "react-icons/go";
import { FaRegCompass } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";
import { RiChatSmile2Fill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { HiCog8Tooth } from "react-icons/hi2";
import { FaPencil, FaRegHandPointer } from "react-icons/fa6";
import { FiLogIn } from "react-icons/fi";
import { useSelector, useDispatch } from 'react-redux'
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal/LoginFormModal";
import SignupFormModal from "../SignupFormModal/SignupFormModal";
import * as sessionActions from '../../redux/session'
import { useNavigate } from "react-router-dom";
import './SideMenu.css'

import OpenModalButton from '../OpenModalButton/OpenModalButton';
import CreatePostModal from "../CreatePostModal";

function SideMenu() {
  const sessionUser = useSelector(state => state.session.user);
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef()
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.thunkLogout());
    closeMenu();
    navigate('/');
  };

  const featureAlert = (e) => {
    e.preventDefault();
    alert("Feature coming soon!")
  };

  return (
    <div className="full-left-side">
      <div>
      {sessionUser ? (
        <>
          <div className="side-menu-logged">
            <button onClick={featureAlert} className="home-button">
              <GoHomeFill className="menu-icon"/> Home
            </button>
            <button onClick={featureAlert}  className="explore-button">
              <FaRegCompass className="menu-icon"/> Explore
            </button>
            <button onClick={featureAlert} className="activity-button">
              <BsLightningChargeFill className="menu-icon"/> Activity
            </button>
            <button onClick={featureAlert}  className="messages-button">
              <RiChatSmile2Fill className="menu-icon"/> Messages
            </button>
            <button onClick={featureAlert}  className="inbox-button">
              <IoIosMail className="menu-icon"/> Inbox
            </button>
            <button onClick={featureAlert}  className="settings-button">
              <HiCog8Tooth className="menu-icon"/> Settings
            </button>
            <button className="account-button" onClick={logout}>
              <IoPersonSharp className="menu-icon"/> Logout
            </button>
          </div>
          <div className="create-btn-container">
            <OpenModalButton
            className="create-button"
            buttonText={<><FaPencil /> <span>Create</span></>}
            modalComponent={<CreatePostModal />}
             />
          </div>
        </>
        ) : (
         <div className="not-logged">
            <div className="login-profile">
              <OpenModalMenuItem
                itemText={<><FiLogIn className="login-icon"/> Login</>}
                onItemClick={closeMenu}
                modalComponent={<LoginFormModal />}
              />
            </div>
            <div className="signup-button">
              <OpenModalMenuItem
                itemText={<><FaRegHandPointer className="signup-icon"/> Sign Up</>}
                onItemClick={closeMenu}
                modalComponent={<SignupFormModal />}
              />
            </div>
         </div>
        )}
      </div>
    </div>
  )
}

export default SideMenu;
