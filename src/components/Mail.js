import React from "react";
import { useNavigate } from "react-router-dom";
import "./Mail.css";
import { IconButton } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import NavigateBeforeSharpIcon from "@mui/icons-material/NavigateBeforeSharp";
import NavigateNextSharpIcon from "@mui/icons-material/NavigateNextSharp";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
function Mail() {
  const navigate = useNavigate();
  const handleClick = ()=>
  {
    console.log("handleclick")
    navigate("/");
  }
  return (
    <div className="Mail">
      <div className="Mail__Row1">
        <div className="Mail__Row1__settings__left">
          <IconButton onClick={handleClick}>
            <ArrowBackOutlinedIcon />
          </IconButton>
          <div className="Row1__settings__left__Group1">
            <IconButton>
              <ArchiveOutlinedIcon />
            </IconButton>
            <IconButton>
              <ReportGmailerrorredOutlinedIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </div>

          <div className="Row1__settings__left__Group2">
            <IconButton>
              <MarkEmailUnreadOutlinedIcon />
            </IconButton>
            <IconButton>
              <AccessTimeOutlinedIcon />
            </IconButton>
            <IconButton>
              <AddTaskOutlinedIcon />
            </IconButton>
          </div>
          <div className="Row1__settings__left__Group3">
            <IconButton>
              <DriveFileMoveOutlinedIcon />
            </IconButton>
            <IconButton>
              <LabelOutlinedIcon />
            </IconButton>
            <IconButton>
              <MoreVertOutlinedIcon />
            </IconButton>
          </div>
        </div>
        <div className="Mail__Row1__settings__right">
          <div className="Row1__settings__right__range">
            <p>1-50 of 24,534</p>
          </div>
          <IconButton>
            <NavigateBeforeSharpIcon />
          </IconButton>
          <IconButton>
            <NavigateNextSharpIcon />
          </IconButton>
        </div>
      </div>
      <div className="Mail__Row2">
        <div className="Row2__left">
          <h3 className="Row2__Title">A Chinese city exists for iPhones</h3>
          <div className="Row2__inbox__option">
            <p>Inbox</p>
            <span>
              <CloseOutlinedIcon />
            </span>
          </div>
        </div>
        <div className="Row2__settings__right">
          <IconButton>
            <PrintOutlinedIcon />
          </IconButton>
          <IconButton>
            <OpenInNewOutlinedIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Mail;
