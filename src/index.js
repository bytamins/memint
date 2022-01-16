import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { MoralisProvider } from "react-moralis";

import { NetworkProvider } from "./utils/networkProvider";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

const serverUrl = "https://wlpp28btq31m.usemoralis.com:2053/server";
const appId = "LZEWPr567NGoaggVc7w8IYTEHtPiiZOHqR0efKUe";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <NetworkProvider>
        <Router>
          <App />
        </Router>
      </NetworkProvider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
