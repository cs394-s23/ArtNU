import { AddPost } from "./AddPost";
import { useState, useEffect } from "react";

import home from './icons/Home.png'
import message from './icons/Message.png';
import explore from './icons/Explore.png';
import plus from './icons/plus.png';
import { togglePopUp } from "./explore";
import {chatvisible} from "./explore";

export function Navbar(props) {

    return (
        
        <nav>
          <a>
            <img src={home}></img>
          </a>
          <a>
            <img src = {explore}></img>
          </a>
          <a onClick= {chatvisible}>
            <img src={message}></img>
          </a>
            
          <a onClick={togglePopUp}>       
            <img src={plus}></img>
          </a>
          </nav>
             
              
           
           
            

    )

}
