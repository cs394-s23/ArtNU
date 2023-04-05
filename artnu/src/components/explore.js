import {Posts} from './posts.js';
import {Navbar} from './navbar.js'
import {Filters} from './filters.js'
import {useState} from 'react';
import user from './icons/user.png'
import paw from './icons/paw.png'


export default function Explore() {
  const [popUpVisible, setPopUpVisible] = useState(false);
  const openpopup = (e) => {
    setPopUpVisible(true);

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
        <Navbar open={openpopup}/>
     </aside>
      
    </>
  );
}