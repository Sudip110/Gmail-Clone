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
  const fetchEmails = async () => {
    try {
      // const querySnapshot = await getDocs(
      //   query(collection(db, "emails"), orderBy("timestamp","desc"))
      // );
      const q = query(collection(db, "emails"), orderBy("timeStamp", "desc"));
      const querySnapshot = await getDocs(q);
      const fetchedEmails = [];
      querySnapshot.forEach((doc) => {
        fetchedEmails.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      console.log(fetchedEmails);
      setEmails(fetchedEmails);
      // console.log(emails);
    } catch (error) {
      console.error("Error fetching emails:", error);
    }
  };
  useEffect(() => {
    fetchEmails();
    console.log(`emails ${emails}`);
  }, []);
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

      {emails.map(
        ({
          id,
          data: {
            To,
            Subject,
            Bcc,
            Cc,
            Message,
            timeStamp: { seconds },
          },
        }) => (
          <div className="EmailRow__section">
            <EmailRow
              key={id}
              title={Subject}
              content={Message.slice(0, 6)}
              description={Message.slice(6)}
              time={new Date(seconds * 1000).toLocaleString()}
            />
          </div>
        )
      )}
      {/* <div className="EmailRow__section">
        <EmailRow
          title={"LinkedIn Alerts"}
          content={"ahvahjvdshvjbvdjabdvjdvadnvadv"}
          description={
            "ssabwhjvevfahbdfajndv,mandvndvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv"
          }
          time={"15 Mar"}
        />
      </div> */}
    </div>
  );
}

export default EmailList;
