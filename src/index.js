import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { initializeApp } from "firebase/app";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { UserProvider } from "./providers/user";

const firebaseConfig = {
  apiKey: "AIzaSyC2GtOEaO0a2x1i1FWoyT_A15sAobHZ0Rw",
  authDomain: "memint-56be9.firebaseapp.com",
  projectId: "memint-56be9",
  storageBucket: "memint-56be9.appspot.com",
  messagingSenderId: "1059594580262",
  appId: "1:1059594580262:web:268b7404f16ef1385651e7",
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Router>
        <App />
      </Router>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
