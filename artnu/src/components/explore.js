import {Posts} from './posts.js';
import {Navbar} from './navbar.js'
import {Filters} from './filters.js'
import {useState} from 'react';
import user from './icons/user.png'
import paw from './icons/paw.png'
import { AddPost } from "./AddPost";

export let togglePopUp;

export default function Explore() {
  const [popUpVisible, setPopUpVisible] = useState(false);

  togglePopUp = () => {
    setPopUpVisible(!popUpVisible);
  }
  
  return (

    <>
      <header>
        <div className="logo">
        <img src={paw}></img>
        <span>NU Art</span>
        </div>
        <span className="explore">Explore</span>
          <a>
            <img src={user} class="user"></img>
          </a>
      </header>

      <main>   
      <Posts/>
     
        
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