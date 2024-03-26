import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mail from "./components/Mail";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import EmailList from "./components/EmailList";
import Compose from "./components/Compose";
import { selectSendMessageIsOpen } from "./features/mailSlice.js";
import { useSelector, Provider } from "react-redux";
import { store } from "./app/store.js";
function App() {
  const sendMailIsOpen = useSelector(selectSendMessageIsOpen);
  console.log(sendMailIsOpen);
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className="app__body">
          <Router>
            <Sidebar />
            <Routes>
              <Route path="/" element={<EmailList />} />
              <Route path="/mail" element={<Mail />} />
            </Routes>
          </Router>
          {sendMailIsOpen && (
            <div className="sendMessage">
              <Compose />
            </div>
          )}
        </div>
      </div>
    </Provider>
  );
}

export default App;
