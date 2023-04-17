import {Posts} from './posts.js';
import {Navbar} from './navbar.js'
import {Filters} from './filters.js'
import {useState} from 'react';
import myUser from './icons/user.png'
import paw from './icons/paw.png'
import { AddPost } from "./AddPost.js";
import SignIn from './SignIn.js';
import { useUser } from '../context/AuthContext.js';
import { Button } from '@mui/material';

export let togglePopUp;

export default function Home() {
  const { user, signIn, signOut } = useUser();
  const [popUpVisible, setPopUpVisible] = useState(false);

  togglePopUp = () => {
    setPopUpVisible(!popUpVisible);
  }
  
  return (

    <>
      {user ? (
        <>
      <header>
        <div className="logo">
        <img src={paw}></img>
        <span>NU Art</span>
        </div>
        <span className="page-title">Home</span>
          <a href='../ArtNU/profile'>
            <img src={myUser} class="user"></img>
          </a>
      </header>

      <main className="home">   
      <Posts/>
     
        
      </main>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: "10%" }}>
  <Button variant="contained" sx={{ mt: 2 }} onClick={signOut}>
    Sign Out
  </Button>
</div>
      <aside>
        <Navbar/>
      </aside>
  
      <div className="newCommission">
        <AddPost popUpVisible={popUpVisible} togglePopUp={togglePopUp} />
      </div>   
        </>
      ) : (
        <>
{/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#8e44ad' }}>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', borderRadius: '10px', backgroundColor: 'white' }}> */}
    {/* <h2 style={{ color: '#8e44ad' }}>Welcome to NU Art!</h2> */}
    <SignIn></SignIn>
  {/* </div>
</div> */}

        </>
      )} 
      
    </>
  );
}