import { AddPost } from "./AddPost";
import { useState, useEffect } from "react";

import home from './icons/Home.png'
import message from './icons/Message.png';
import explore from './icons/Explore.png';
import plus from './icons/plus.png';
// import { togglePopUp } from "./home";
import { togglePopUp } from "./Home";

export function Navbar(props) {

    return (
        
        <nav>
          <a  href="home">
            <img src={home}></img>
          </a>
          <a href="explore">
            <img src = {explore}></img>
          </a>
          <a href="chatbox">
            <img src={message}></img>
          </a>
            
          <a onClick={togglePopUp}>       
            <img src={plus}></img>
          </a>
          </nav>
             
              
           
           
            

    )

}
