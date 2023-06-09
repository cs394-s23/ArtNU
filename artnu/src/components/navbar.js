import { AddPost } from "./AddPost";
import { useState, useEffect } from "react";

import home from './icons/Home.png'
import message from './icons/Message.png';
import explore from './icons/Explore.png';
import plus from './icons/plus.png';
import { togglePopUp } from "./Home.js";
import user_icon from './icons/user_icon.png';

export function Navbar(props) {

    return (
        
        <nav>
          <a href="../ArtNU/profile">
            <img src={user_icon}></img>
          </a>
          <a  href="../ArtNU/home">
            <img src={home}></img>
          </a>
          <a href="../ArtNU/chatbox">
            <img src={message}></img>
          </a>
            
          <a onClick={togglePopUp}>       
            <img src={plus}></img>
          </a>
        </nav>
             
              
           
           
            

    )

}
