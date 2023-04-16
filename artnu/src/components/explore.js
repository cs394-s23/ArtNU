import {Posts} from './posts.js';
import {Navbar} from './navbar.js'
import {Filters} from './filters.js'
import {useState} from 'react';
import user from './icons/user.png'
import paw from './icons/paw.png'
import { AddPost } from "./AddPost.js";

export default function Explore() {
    
    const [popUpVisible, setPopUpVisible] = useState(false);
       
    const togglePopUp = () => {
        setPopUpVisible(!popUpVisible);
    }

    return (
  
      <>
        <header>
          <div className="logo">
            <img src={paw}></img>
            <span>NU Art</span>
          </div>
          <span className="page-title">Explore</span>
            <a>
              <img src={user} class="user"></img>
            </a>
        </header>


        <main className="explore">
        <section className="nu-favorites">
            <h1>NU Favorites</h1>
            <Posts/>
        </section>
        <section className="friends-like">
            <h1>Your friends like</h1>
            <Posts/>
        </section>
        <section className="curr-popups">
            <h1>Current Pop Ups</h1>
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