import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { initializeApp } from "firebase/app";
import "bootstrap/dist/css/bootstrap.min.css";
import { MoralisProvider } from "react-moralis";

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

const serverUrl = "https://wlpp28btq31m.usemoralis.com:2053/server";
const appId = "LZEWPr567NGoaggVc7w8IYTEHtPiiZOHqR0efKUe";

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <UserProvider>
        <Router>
          <App />
        </Router>
      </UserProvider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
