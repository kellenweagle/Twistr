import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import OpenModalButton from "../OpenModalButton/OpenModalButton";
import { GoHomeFill } from "react-icons/go";
import { FaRegCompass } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";
import { RiChatSmile2Fill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { HiCog8Tooth } from "react-icons/hi2";
import { FaPencil } from "react-icons/fa6";
import './SideMenu.css'

function SideMenu() {
  return (
    <div className="full-left-side">
      <div className="side-menu">
        <button className="home-button">
          <GoHomeFill className="menu-icon"/> Home
        </button>
        <button className="explore-button">
          <FaRegCompass className="menu-icon"/> Explore
        </button>
        <button className="activity-button">
          <BsLightningChargeFill className="menu-icon"/> Activity
        </button>
        <button className="messages-button">
          <RiChatSmile2Fill className="menu-icon"/> Messages
        </button>
        <button className="inbox-button">
          <IoIosMail className="menu-icon"/> Inbox
        </button>
        <button className="account-button">
          <IoPersonSharp className="menu-icon"/> Account
        </button>
        <button className="settings-button">
          <HiCog8Tooth className="menu-icon"/> Settings
        </button>
      </div>
      <div>
        <button className="create-button">
          <FaPencil className="menu-icon"/> Create
        </button>
      </div>
    </div>
  )
}

export default SideMenu;