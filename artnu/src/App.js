import './App.css';
import { readPosts } from "./firebase.js"
import Home from "./components/Home.js"
import {AddPost} from "./components/AddPost.js"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Navbar } from './components/navbar';
import NoPage from './components/NoPage';
import Commissions from './components/Commissions';
import Explore from "./components/explore.js";
import { ChatBox } from './components/Chatbox';
import SignIn from './components/SignIn';
import { Profile } from './components/Profile';
import {ArtistProfile} from './components/ArtistProfile';
import { Outscreen } from './components/out';
import { UserProvider } from './context/AuthContext.js';

function App() {

  // const navigate = useNavigate(); // Initialize navigate
  console.log("user provider", UserProvider.user)
  // if the user is not authenticated, you can navigate to the sign-in route
  const userIsAuthenticated = true

  // if (!userIsAuthenticated) {
  //   navigate("/ArtNU/signin"); // Redirect to the sign-in route
  // }


  readPosts()
 
  return (
    <div className="App">
      {/* <Explore></Explore> */}
      <BrowserRouter>
      <UserProvider>
        <Routes>
          {/* This is the parent route - render its child routes */}
            <Route path='/' element={<div className="App"><Home /><div className="newCommission"><AddPost/></div></div>}/>
            <Route path='ArtNU/' element={<div className="App"><Home /><div className="newCommission"><AddPost/></div></div>}/>
            <Route path="ArtNU/commissions" element={<Commissions/>}/>
            <Route path="ArtNU/*" element={<div><Navbar/><NoPage/></div>}/>
            <Route path="ArtNU/explore" element={<Explore/>}/>
            <Route path="ArtNU/chatbox" element={<ChatBox/>}/>
            <Route path="ArtNU/profile" element={<Profile/>}/>
            <Route path="ArtNU/home" element={<Home/>}/>
            <Route path="ArtNU/:id" element={<ArtistProfile/>}/>
            <Route path="ArtNU/signin" element={<SignIn/>}/>
            <Route path="ArtNU/signout" element={<Outscreen/>}/>
            {/* <Route
                path="*"
                element={<Navigate to="ArtNU/home" replace />}
            /> */}
        </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
