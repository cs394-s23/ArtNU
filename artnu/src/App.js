import logo from './logo.svg';
import './App.css';
// import { readPosts } from '../utilities/firebase';
import { readPosts } from "./firebase.js"
import Explore from "./components/explore.js"
import {PostCommission} from "./components/postCommission.js"



function App() {
  readPosts()
  return (
    <div className="App">
      <Explore/>
      <div className="newCommission"><PostCommission/></div>
    </div>
  );
}

export default App;
