import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Join from "./Join.jsx";
import Game from "./Game.jsx";

import firebase from 'firebase/app';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFDkOxna1e68iavzBKupblY1VoSmMZISg",
  authDomain: "canving001.firebaseapp.com",
  projectId: "canving001",
  storageBucket: "canving001.appspot.com",
  messagingSenderId: "192164341752",
  appId: "1:192164341752:web:e1464a115a9411d54b580d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/join" element={<Join />} />
      <Route path="/:id" element={<Game />} />
    </Routes>
  </Router>
)

export default App;