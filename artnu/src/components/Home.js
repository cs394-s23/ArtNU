import { Posts } from './posts.js';
import { Navbar } from './navbar.js'
import { Filters } from './filters.js'
import { useState, useEffect } from 'react';
import myUser from './icons/user.png'
import paw from './icons/paw.png'
import { AddPost } from "./AddPost.js";
import SignIn from './SignIn.js';
import { useUser } from '../context/AuthContext.js';
import { Button } from '@mui/material';
import { addUser } from '../firebase.js';
import { UserList } from './UserList.js';

export let togglePopUp;

export default function Home(props) {
  console.log("props", props)
  const {user, signin , signOut} = useUser();

 


  //not sure why we are reseting the user upon Homepage, so i removed
  // useEffect(() => {
  //   if (user) {
  //     addUser(user.uid, user.displayName)
  //     console.log('added user', user.uid, user.displayName)
  //   }
  // }, [user])


  const [isLoading, setIsLoading] = useState(true);
  const [popUpVisible, setPopUpVisible] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    // Simulate loading for 2 seconds
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 750);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  togglePopUp = () => {
    setPopUpVisible(!popUpVisible);
  }

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {user ? (
            <>
              <header id="home-header">
                <div className="logo">
                  <img src={paw}></img>
                  <span>NU Art</span>
                </div>
                <div className="page-title">Home</div>

                
              </header>

              <aside>
                <Navbar />
              </aside>

              <main className="home">
                <div className="userlist">
                  <UserList />
                </div>
                <hr></hr>

                <Posts />
              </main>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: "10%" }}>
                <Button variant="contained" sx={{ mt: 2 }} onClick={signOut}>
                  Sign Out
                </Button>
              </div>


              <div className="newCommission">
                <AddPost popUpVisible={popUpVisible} togglePopUp={togglePopUp} />
              </div>
            </>
          ) : (
            <>
              {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#8e44ad' }}>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', borderRadius: '10px', backgroundColor: 'white' }}> */}
              {/* <h2 style={{ color: '#8e44ad' }}>Welcome to NU Art!</h2> */}
              
              {/* </div>
</div> */}

            </>
          )}
        </>
      )}
    </>
  );
}
