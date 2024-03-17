import React from "react";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DragIndicatorOutlinedIcon from "@mui/icons-material/DragIndicatorOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import "./EmailRow.css";
import { IconButton } from "@mui/material";

function EmailRow({ title, content, description, time }) {
  return (
    <div className="EmailRow">
      <div className="row__setting__start">
        <div className="setting__start__drag">
        <DragIndicatorOutlinedIcon />
        </div>
        <IconButton className="row__settings__checkbox">
         <CheckBoxOutlineBlankOutlinedIcon />
        </IconButton>
        <IconButton>
         <StarBorderOutlinedIcon />
        </IconButton>
      </div>
      <h3 className="row__title">{title}</h3>
      <h4 className="row__content">{content}
            <span className="row__description"> - {description}
            </span>
      </h4>
      <div className="row__settings__end">
        <IconButton>
         <ArchiveOutlinedIcon />
        </IconButton>
        <IconButton>
         <DeleteOutlineOutlinedIcon />
        </IconButton>
        <IconButton>
         <DraftsOutlinedIcon />
        </IconButton>
        <IconButton>
         <AccessTimeOutlinedIcon />
        </IconButton>
      </div>
      <p className="row__time">{time}</p>
    </div>
  );
}

export default EmailRow;
