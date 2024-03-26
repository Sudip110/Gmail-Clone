import React from "react";
import "./Sidebar.css";
import { Button } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import AddIcon from "@mui/icons-material/Add";
import Sidebaroption from "./Sidebaroption";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { useDispatch, useSelector } from "react-redux";
import { openSendMessage } from "../features/mailSlice.js";
import { selectSendMessageIsOpen } from "../features/mailSlice.js";
function Sidebar() {
  const dispatch = useDispatch();
  const SendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const handleClick = () => {
    console.log("Compose clicked!!");
    dispatch(openSendMessage());
    console.log(openSendMessage);
  };
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="medium" />}
        onClick={handleClick}
        className="sidebar__compose"
      >
        Compose
      </Button>
      <Sidebaroption
        Icon={InboxIcon}
        title="Inbox"
        count={1256}
        selected={true}
      />
      <Sidebaroption
        Icon={StarOutlineOutlinedIcon}
        title="Starred"
        count={1256}
        selected={false}
      />
      <Sidebaroption
        Icon={AccessTimeOutlinedIcon}
        title="Snoozed"
        count={1256}
        selected={false}
      />
      <Sidebaroption
        Icon={SendOutlinedIcon}
        title="Sent"
        count={1256}
        selected={false}
      />
      <Sidebaroption
        Icon={InsertDriveFileIcon}
        title="Drafts"
        count={1256}
        selected={false}
      />
      <Sidebaroption
        Icon={ExpandMoreOutlinedIcon}
        title="More"
        selected={false}
      />
    </div>
  );
}

export default Sidebar;
