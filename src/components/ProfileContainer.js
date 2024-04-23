import { Button, IconButton } from '@mui/material';
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import React from 'react';
import './ProfileContainer.css';
import { useDispatch } from 'react-redux';
import { auth } from '../Firebase/firebase';
import { signOut } from 'firebase/auth';
import { logout } from '../features/userSlice';
import { closeSignoutDialogue } from '../features/mailSlice';
function ProfileContainer({email,photoURL,name}) {
  const dispatch = useDispatch();
  const handleClickClose =()=>
  {
    dispatch(closeSignoutDialogue());
  }
  const handleClickSignout =()=>
  {
    signOut(auth).then(()=>
    {
      dispatch(logout());
    })
    dispatch(closeSignoutDialogue());
  }
  return (
    <div className='ProfileContainer'>
                    <IconButton onClick={handleClickClose} className="signout__dialogbox__close">  
                      <CloseOutlinedIcon/>
                    </IconButton>
                    <div className="signout__dialogbox__content">
                      <span className="signout__dialogbox__element"><p>{email}</p></span>
                      <img src ={photoURL} className="signout__dialogbox__element"></img>
                      <p className="signout__dialogbox__element">Hi <span>{` ${name} !`}</span></p>
                      <Button onClick={handleClickSignout} className="signout__dialogbox__element" color="primary"
                      variant="contained" >Sign out </Button>
                    </div>
    </div>
  )
}

export default ProfileContainer