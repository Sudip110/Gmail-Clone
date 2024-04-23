import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import AppsIcon from "@mui/icons-material/Apps";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

import { IconButton,Button } from "@mui/material";
import Logo from "../assets/Gmail with Text.svg";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import {selectUser } from "../features/userSlice";
import ProfileContainer from "./ProfileContainer";
import { openSignoutDialogue, selectSignOutMessageIsOpen } from "../features/mailSlice";
function Header() {
  const user = useSelector(selectUser);
  const signoutDialogueIsOpen = useSelector(selectSignOutMessageIsOpen);
  const dispatch = useDispatch();
  const photoURL =user.userPhotoUrl;
  const name = user.displayName;
  const email = user.userEmail;
  
  const handleClickProfile = () =>
  {
    dispatch(openSignoutDialogue());
  }
  return (
    <div className="header">
      <div className="header__left">
        <IconButton className="header__menu">
          <MenuIcon />
        </IconButton>
        <img src={Logo} alt="gmail-logo" className="header__image" />
      </div>

     <div className="header__middle_search">
        <div className="header__middle">
            <IconButton>     
            <SearchIcon />
            </IconButton>
            <input
            type="text"
            placeholder="Search mail"
            className="header__middle__input"
            />
            <IconButton className="header__middle_tune">
            <TuneIcon />
            </IconButton>
        </div>
      </div>
      <div className="header__right">
            <IconButton className="header__right_help">
                <HelpOutlineOutlinedIcon />
            </IconButton>
            <IconButton className="header__right_apps">
             <AppsIcon />
            </IconButton>
            <IconButton className="header__right_settings">
                <SettingsIcon />
            </IconButton>

                <IconButton onClick={handleClickProfile} className="header__right_avatar">  
                    {(photoURL ? (<img src={photoURL}></img>):(<AccountCircleIcon />))} 
                </IconButton>
                {signoutDialogueIsOpen && <ProfileContainer email={email} photoURL={photoURL} name={name}/> }
      </div>
    </div>
  );
}

export default Header;
