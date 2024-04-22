import React from 'react';
import "./Login.css";
import Logo from "../assets/Google_logo.png";
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { login} from '../features/userSlice';
import { auth, provider } from '../Firebase/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
function Login() {
    const dispatch= useDispatch();
    const handleClickSignin = ()=>
    {
        signInWithPopup(auth,provider).then((result)=>
        {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user=result.user;
            // console.log(`result ${result}`);
            // console.log(`credential ${credential}`);
            // console.log(user);
            dispatch(login({
                displayName:user.displayName,
                userEmail:user.email,
                userPhotoUrl:user.photoURL,

            }))
        }).catch((error)=>{
            const errorCode = error.code;
            const errormsg=error.message;
            const email = error.customData.email;
            const credential =GoogleAuthProvider.credentialFromError(error);
            // console.log(`error code ${errorCode}`);
            // console.log(`errormsg ${errormsg}`);
            // console.log(`email ${email}`);
            // console.log(`credential ${credential}`);
        })
    }
  return (
    <div className='login__container'>
        <img src={Logo} alt='Google Logo'></img>
        <div className='login__container__content'>
            <h3>Sign in</h3>
            <p>to continue to Gmail</p>
            <Button color="primary"
            variant="contained" onClick={handleClickSignin}>Sign in </Button>
        </div>
    </div>
  )
}

export default Login