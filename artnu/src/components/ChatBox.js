import {Posts} from './posts.js';
import {Navbar} from './navbar.js'
import {Filters} from './filters.js'
import {useState} from 'react';
import user from './icons/user.png'
import paw from './icons/paw.png'
import { AddPost } from "./AddPost";

export function ChatBox (props) {
    const {chatvisible, setchatvisible } = props;
    console.log(chatvisible)
    return ( <div >
          {chatvisible && (
            <div className="chatbox">
   
                
                    

           
                <div className="chatbox-side">
                <div className="chatbox-header-left">
                  <a>General</a>
                    <a>Orders</a>
                    <a>Commissions</a>
                </div>
                </div>
                <div className="chatbox-main">
                <div className="chatbox-header-right" onClick={setchatvisible}></div>
                <div className="chatbox-inner"></div>
                </div>

                
                    
       
            </div>
       
            )}
        </div>
    )
}
      



