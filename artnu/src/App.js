import logo from './logo.svg';
import './App.css';
import { readPosts } from "./firebase.js"
import Home from "./components/Home.js"
import {AddPost} from "./components/AddPost.js"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PurchaseBox } from './components/purchaseBox';
import { Navbar } from './components/navbar';
import NoPage from './components/NoPage';
import Commissions from './components/Commissions';
import Explore from "./components/explore.js";
import { ChatBox } from './components/Chatbox';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { auth, provider } from './firebase.js';
import { signInWithRedirect } from 'firebase/auth';
import { UserProvider } from './context/AuthContext';
import { Profile } from './components/Profile';
import {ArtistProfile} from './components/ArtistProfile';


function App() {
  readPosts()
  // signInWithRedirect(auth, provider);
  return (
    <div className="App">
      {/* <Explore></Explore> */}
      <BrowserRouter>
      <UserProvider>
        <Routes>
          {/* This is the parent route - render its child routes */}
            <Route path='ArtNU/' element={<div className="App"><Home/><div className="newCommission"><AddPost/></div></div>}/>
            <Route path="ArtNU/commissions" element={<Commissions/>}/>
            <Route path="ArtNU/*" element={<div><Navbar/><NoPage/></div>}/>
            <Route path="ArtNU/explore" element={<Explore/>}/>
            <Route path="ArtNU/chatbox" element={<ChatBox/>}/>
            <Route path="ArtNU/profile" element={<Profile/>}/>
            <Route path="ArtNU/home" element={<UserProvider><Home/></UserProvider>}/>
            <Route path="ArtNU/:id" element={<ArtistProfile/>}/>
            {/* <Route path="ArtNU/signin" element={<SignIn/>}/>
            <Route path="ArtNU/signup" element={<SignUp/>}/> */}
            <Route
                path="*"
                element={<Navigate to="ArtNU/home" replace />}
            />
        </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
