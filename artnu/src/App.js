import logo from './logo.svg';
import './App.css';
import { readPosts } from "./firebase.js"
import Home from "./components/Home.js"
import {AddPost} from "./components/AddPost.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PurchaseBox } from './components/purchaseBox';
import { Navbar } from './components/navbar';
import NoPage from './components/NoPage';
import Commissions from './components/Commissions';
import Explore from "./components/explore.js";
import { ChatBox } from './components/Chatbox';
import Search from "./components/Search";

function App() {
  readPosts()
  return (
    <div className="App">
      {/* <Explore></Explore> */}
      <BrowserRouter>
        <Routes>
          {/* This is the parent route - render its child routes */}
            <Route path='ArtNU/' element={<div className="App"><Home/><div className="newCommission"><AddPost/></div></div>}/>
            <Route path="ArtNU/commissions" element={<Commissions/>}/>
            <Route path="ArtNU/*" element={<div><Navbar/><NoPage/></div>}/>
            <Route path="ArtNU/explore" element={<Explore/>}/>
            <Route path="ArtNU/chatbox" element={<div><Navbar/><ChatBox/></div>}/>
            <Route path="ArtNU/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
