import React, { useEffect, useState } from "react";
import { useUser } from "../context/AuthContext";
import SignIn from "./SignIn";
import { Typography, Box, TextField, Button, Card, CardHeader, CardContent, Avatar } from "@mui/material";
import { Navbar } from "./navbar";
import { Alert } from "@mui/material";
import { addUser } from "../firebase";
import { posts_data } from "../firebase.js";
import {Post} from "./post.js" ;
import { getUserById } from "../firebase";



export function Profile() {
  const { user, signIn, signOut } = useUser();
  const [showAlert, setShowAlert] = useState(false);
  const [showAddInfo, setShowAddInfo] = useState(true)
  const [userData, setUserData] = useState(null)

  const [posts, setPosts] = useState([])

  console.log(user)

  useEffect(() => {
    async function wrapper(id){
      const data = await getUserById(id)
      setUserData(data)
      console.log("inside", data)
    }
    if (user) {
      wrapper(user.uid)
    }
  }, [user]);

  console.log("after data", userData)
  const [isLoading, setIsLoading] = useState(true);

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

  function filterByID(post){
    if (post.uid && user && post){
      if (post.uid == user.uid){
        return true
      }
      else {
        return false
      }
    }
  }

  useEffect(() =>{ // initialize THIS ONLY ONCE
    const dp = posts_data
    .then(data => {
        let user_posts = data.filter(filterByID)
        setPosts(user_posts)
    })}, [user]
  )

  const handleSave = () => {
    // You can send the updated parameters to a backend server or update them in the local state.
    addUser(user.uid, userData.author, userData.major, userData.year, userData.interests, userData.hometown, userData.pic);
    setShowAlert(true);
    setShowAddInfo(false);
  };

  const closeAddInfoPopUp = () => {
    setShowAddInfo(false);
  }

if (userData){
return (
  <>
    {isLoading ? (
      <div>Loading...</div>
    ) : (
      <>
        {user ? (
          <>
          <div className = "profile-page">
            <Navbar />
            {showAddInfo && (
            <div className="add-info-popup-bg">
            <Box className="add-info-popup" sx={{ m: 2, display: "flex", justifyContent: "center", bgcolor:""}}>
              <Card sx={{ width: 500 }}>
            <button onClick={closeAddInfoPopUp}>
              <i class="fa-solid fa-xmark"></i>
            </button>
          <Typography variant="h5" sx={{ mb:2, padding:2}}>
          Tell us about yourself!
          </Typography>
          <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box sx={{ bgcolor: "background.paper", p: 2 }}>
                <TextField
                  label="Major"
                  value={userData.major}
                  onChange={(e) => setUserData({ ...userData, major:e.target.value})}
                />
              </Box>
              <Box sx={{ bgcolor: "background.paper", p: 2 }}>
                <TextField
                  label="Year"
                  value={userData.year}
                  onChange={(e) => setUserData({ ...userData, year:e.target.value})}
                />
              </Box>
              <Box sx={{ bgcolor: "background.paper", p: 2 }}>
                <TextField
                  label="Interests"
                  value={userData.interests}
                  onChange={(e) => setUserData({ ...userData, interests:e.target.value})}
                />
              </Box>
              <Box sx={{ bgcolor: "background.paper", p: 2 }}>
                <TextField
                  label="Hometown"
                  value={userData.hometown}
                  onChange={(e) => setUserData({ ...userData, hometown:e.target.value})}
                />
              </Box>
              <Box sx={{ p: 2 }}>
                <Button variant="contained" onClick={handleSave}>
                  Save
                </Button>
                {showAlert && (
                  <Alert
                    severity="success"
                    sx={{ mt: 2 }}
                    onClose={() => setShowAlert(false)}
                  >
                    Changes saved successfully!
                  </Alert>
                )}
              </Box>
          </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
    )}

    {/* post generation below */}
  <div className="profile">
      <div className="user-info">
        <div className="profile-pic">
          <img src={userData.pic}></img>
        </div>
        <div className="rest">
          <h1>{userData.author}</h1>
          {userData.major && <h2 className="major">{userData.major} Major</h2>}
          <h3>Hometown: {userData.hometown}</h3>
          <h3>Interests: {userData.interests}</h3>
        </div>
      </div>
    <div className = "postsfeed">
            {posts.map((post) => (
              <>
                <Post
                    key = {post.ref}
                    img={post.img}
                    author={post.author}
                    likes={post.likes}
                    price={post.price}
                    caption={post.caption}
                    title = {post.title}
                    // getUser = {getUser} 
                    // userRef = {post.user} 
                    uid={post.uid}
                />
              </>
            ))}
        </div>
        </div>
  </div>
  </>
    ) : (
      <>
      <SignIn></SignIn>
      </>
    )}
    </>
  )}
  </>
  
);

}
}
