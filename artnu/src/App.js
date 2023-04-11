import logo from './logo.svg';
import './App.css';
import { readPosts } from "./firebase.js"
import Explore from "./components/explore.js"
import {AddPost} from "./components/AddPost.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PurchaseBox } from './components/purchaseBox';
import { Navbar } from './components/navbar';
import NoPage from './components/NoPage';
import Commissions from './components/Commissions';

function App() {
  readPosts()
  return (
    <div className="App">
      {/* <Explore></Explore> */}
      <BrowserRouter>
        <Routes>
          {/* This is the parent route - render its child routes */}
          <Route path='ArtNU/' element={<div className="App"><Explore/><div className="newCommission"><AddPost/></div></div>}/>
          <Route path="ArtNU/commissions" element={<Commissions/>}/>
          <Route path="ArtNU/*" element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
