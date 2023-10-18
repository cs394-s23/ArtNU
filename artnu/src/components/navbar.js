import home from './icons/Home.png'
import message from './icons/Message.png';
import plus from './icons/plus.png';
import { togglePopUp } from "./Home.js";
import user_icon from './icons/user_icon.png';
import { Button } from '@mui/material';
import { useUser } from '../context/AuthContext.js';

export function Navbar(props) {
  const {user, signin , signOut} = useUser();

    return (
        
        <nav>
          <Button
              variant="contained"
              sx={{ mt: 2 }}
              onClick={signOut}
            >
              Sign Out
            </Button>
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
