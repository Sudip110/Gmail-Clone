import React from "react";
import { useForm, Controller } from "react-hook-form";
import "./Compose.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import OpenInFullOutlinedIcon from "@mui/icons-material/OpenInFullOutlined";
import MinimizeOutlinedIcon from "@mui/icons-material/MinimizeOutlined";
import { Button, IconButton } from "@mui/material";
import { closeSendMessage } from "../features/mailSlice.js";
import { useDispatch } from "react-redux";
import { collection, addDoc, getDocs, Timestamp } from "firebase/firestore";
// import selectSendMessageIsOpen from "../features/mailSlice.js";
import { db, app } from "../Firebase/firebase.js";
function Compose() {
  const { register, handleSubmit, watch, control, errors } = useForm();
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    //console.log(data);
    const docRef = await addDoc(collection(db, "emails"), {
      To: data.to,
      Subject: data.subject,
      CC: data.cc,
      Bcc: data.bcc,
      Message: data.message,
      timeStamp: Timestamp.fromDate(new Date()),
    });
    console.log("Document written with ID: ", docRef.id);

    const querySnapshot = await getDocs(collection(db, "emails"));
    querySnapshot.forEach((email) => {
      console.log(`${email.id} => ${email.data()}`);
    });

    dispatch(closeSendMessage());
  };
  const handleClickCompose = () => {
    console.log("object77777777777777777777");
    dispatch(closeSendMessage());
  };
  return (
    <div className="Mail__Compose ">
      <div className="Compose__row1">
        <p>New Message</p>
        <div className="Compose__row1__settings">
          <IconButton>
            <MinimizeOutlinedIcon />
          </IconButton>
          <IconButton>
            <OpenInFullOutlinedIcon />
          </IconButton>
          <IconButton onClick={handleClickCompose}>
            <CloseOutlinedIcon className="row1__settings__close" />
          </IconButton>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className="sendMessage_input"
          id="sendMessage__to"
          placeholder="To"
          {...register("to", { required: true })}
        />
        <input
          type="text"
          className="sendMessage_input"
          id="sendMessage__subject"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        <input
          type="text"
          className="sendMessage_input"
          id="sendMessage__cc"
          placeholder="Cc"
          {...register("cc", { required: false })}
        />
        <input
          type="text"
          className="sendMessage_input"
          id="sendMessage__bcc"
          placeholder="Bcc"
          {...register("bcc", { required: false })}
        />
        <Controller
          name="message"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <textarea
              {...field}
              className="sendMessage_input"
              id="sendMessage__message"
              placeholder="Enter your message"
            />
          )}
        />

        <div className="sendMail__options">
          <Button
            type="Submit"
            color="primary"
            variant="contained"
            className="sendMail__options__send"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Compose;
