import React from "react";
import "./App.css";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Mail from "./components/Mail"
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import EmailList from "./components/EmailList";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" element={<EmailList/>}/>
            <Route path="/mail" element={<Mail/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
