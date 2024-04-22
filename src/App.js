import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mail from "./components/Mail";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import EmailList from "./components/EmailList";
import Compose from "./components/Compose";
import { selectSendMessageIsOpen } from "./features/mailSlice.js";
import { useSelector, Provider, useDispatch } from "react-redux";
import { store } from "./app/store.js";
import Login from "./components/Login.js";
import { login, selectUser } from "./features/userSlice.js";
import { auth } from "./Firebase/firebase.js";
function App() {
  const sendMailIsOpen = useSelector(selectSendMessageIsOpen);
  const user =useSelector(selectUser);
  const dispatch = useDispatch();
  console.log(sendMailIsOpen);

  useEffect(()=>
  {
    auth.onAuthStateChanged((user)=>
    {
      if(user)
      {
        dispatch(login(
          {
                displayName:user.displayName,
                userEmail:user.email,
                userPhotoUrl:user.photoURL,
          }))
      }
    })
  },[])
  return (
    <Router>
      {!user?
      (<Login/>)
      :
      (
      <Provider store={store}>
        <div className="App">
          <Header />
          <div className="app__body">
            
              <Sidebar />
              <Routes>
                <Route path="/" element={<EmailList />} />
                <Route path="/mail" element={<Mail />} />
              </Routes>
            
            {sendMailIsOpen && (
              <div className="sendMessage">
                <Compose />
              </div>
            )}
          </div>
        </div>
      </Provider>
    )}
    </Router>
  );
}

export default App;
