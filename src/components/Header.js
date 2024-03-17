import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import AppsIcon from "@mui/icons-material/Apps";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { IconButton } from "@mui/material";
import Logo from "../assets/Gmail with Text.svg";
import "./Header.css";
function Header() {
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
            <IconButton className="header__right_avatar">
                <AccountCircleIcon />
            </IconButton>
      </div>
    </div>
  );
}

export default Header;
