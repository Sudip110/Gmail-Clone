import { IconButton } from "@mui/material";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import NavigateBeforeSharpIcon from "@mui/icons-material/NavigateBeforeSharp";
import NavigateNextSharpIcon from "@mui/icons-material/NavigateNextSharp";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import InboxIcon from "@mui/icons-material/Inbox";
import React, { useEffect, useState } from "react";
import "./EmailList.css";
import {
  collection,
  getDocs,
  query,
  orderBy,
  onSnapshot,
  doc,
} from "firebase/firestore";
import { db } from "../Firebase/firebase";
import ListSection from "./ListSection";
import EmailRow from "./EmailRow";


function EmailList() {
  const [emails, setEmails] = useState([]);
  let emailsFetched=false;

  console.log(emails.length);
  console.log(emails);

  if(emails.length>0)
  {
    emailsFetched=true;
    console.log(emails[0].timeStamp.seconds);
  }
  const fetchEmails =() => {
      try {
        const q = query(collection(db, "emails"), orderBy("timeStamp", "desc"));
        return  onSnapshot(q,(querySnapshot)=>
                          {
                            setEmails((querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
                          })  
          } 
          catch (error) {console.error("Error fetching emails:", error);
          }
  };

  useEffect(
    () =>{
      fetchEmails()
      },
    []);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settings__left">
          <IconButton className="settings__checkbox settings__left__option">
            <CheckBoxOutlineBlankOutlinedIcon />
          </IconButton>
          <IconButton className="settings__dropdown settings__left__option">
            <KeyboardArrowDownOutlinedIcon />
          </IconButton>

          <IconButton className="settings__refresh settings__left__option">
            <RefreshOutlinedIcon />
          </IconButton>

          <IconButton className="settings__more settings__left__option">
            <MoreVertOutlinedIcon />
          </IconButton>
        </div>
        <div className="emailList__settings__right">
          <div className="settings__right__range">
            <p>1-50 of 24,534</p>
          </div>
          <IconButton className="settings__right__prev">
            <NavigateBeforeSharpIcon />
          </IconButton>
          <IconButton className="settings__right__next">
            <NavigateNextSharpIcon />
          </IconButton>
        </div>
      </div>
      <div className="EmailList__section">
        <ListSection Icon={InboxIcon} title={"Primary"} selected={true} />
        <ListSection
          Icon={LocalOfferOutlinedIcon}
          title={"Promotions"}
          selected={false}
        />
        <ListSection
          Icon={PeopleAltOutlinedIcon}
          title={"Social"}
          selected={false}
        />
      </div>

      {emailsFetched && emails.map(
        ({
            id,
            To,
            Subject,
            Bcc,
            Cc,
            Message,
            timeStamp:{seconds}
            // timeStamp: { seconds },
        }) => (

          <div className="EmailRow__section">
            <EmailRow
              key={id}
              title={Subject}
              content={Message.slice(0, 6)}
              description={Message.slice(6)}
              time={new Date(seconds * 1000).toLocaleString('en-us',
              {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',})}
            />
          </div>
        )
      )}

    </div>
  );
}

export default EmailList;
