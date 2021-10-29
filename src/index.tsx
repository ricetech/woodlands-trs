// noinspection JSUnusedLocalSymbols

import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDv8T9R9vf4fRczCyzCGtGOhnEnDO9sqI4",
  authDomain: "woodlands-trs.firebaseapp.com",
  projectId: "woodlands-trs",
  storageBucket: "woodlands-trs.appspot.com",
  messagingSenderId: "65882019536",
  appId: "1:65882019536:web:5e1d1eb9b190b5d4a0b0d5",
  measurementId: "G-W2GQ809SKR",
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app);
