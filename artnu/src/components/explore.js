import {Posts} from './posts.js';
import {Navbar} from './navbar.js'
import {Filters} from './filters.js'
import {useState} from 'react';
import user from './icons/user.png'
import { AddPost } from "./AddPost.js";
import { UserList } from "./UserList.js";
import paw from './icons/paw.png'
import SignIn from './SignIn.js';
import userid from "./SignIn";
import { useUser } from '../context/AuthContext.js';


export default function Explore() {
    
    const [popUpVisible, setPopUpVisible] = useState(false);
       
    const togglePopUp = () => {
        setPopUpVisible(!popUpVisible);
    }
    const { user } = useUser();
    console.log(user.userid)

    return (
  
      <>
        <header>
          <div className="logo">
            <img src={paw}></img>
            <span>NU Art</span>
          </div>
          <span className="page-title" data-cy="page-title">Explore</span>
            <a href='../ArtNU/profile'>
              <img src={user} class="user"></img>
            </a>
        </header>
  
        <main className="explore">  
        <section>
          <UserList/>
        </section> 
        <section>
            <h1> All Artwork </h1>
            <Posts/>
        </section>
        </main>
        <aside>
          <Navbar/>
        </aside>
        <div className="newCommission">
          <AddPost popUpVisible={popUpVisible} togglePopUp={togglePopUp} />
        </div>    
        
      </>
    );
  }