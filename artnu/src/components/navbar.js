import { PostCommission } from "./postCommission";
import { useState, useEffect } from "react";

import home from './icons/Home.png'
import message from './icons/Message.png';
import plus from './icons/plus.png';





export function Navbar(props) {

  const [popUpVisible, setPopUpVisible] = useState(false);

  const togglePopUp = () => {
    setPopUpVisible(!popUpVisible);
  }


    return (
  
        
        <nav>
           
           <a>
            <img src={home}></img>
              </a>
           
           <a>
            <img src={message}></img>
                </a>
              <a onClick={togglePopUp}>       
            <img src={plus}></img>
           </a>
           <div className="newCommission">
                <PostCommission popUpVisible={popUpVisible} togglePopUp={togglePopUp} />
            </div>
           </nav>
             
              
           
           
            

    )

}
