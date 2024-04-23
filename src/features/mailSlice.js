import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMessageIsOpen: false,
    signoutDialogueIsOpen:false,
    selectedMail:null,
  },
  reducers: {
    selectMail:(state,action)=>
    {
      state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
    openSignoutDialogue:(state) => 
    {
      state.signoutDialogueIsOpen=true;
    },
    closeSignoutDialogue:(state)=>
    {
      state.signoutDialogueIsOpen=false;
    }
  },
});

export const { selectMail,openSendMessage, closeSendMessage,openSignoutDialogue,closeSignoutDialogue } = mailSlice.actions;
export const selectSignOutMessageIsOpen = (state) => state.mail.signoutDialogueIsOpen;
export const selectOpenMail = (state) => state.mail.selectedMail;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
