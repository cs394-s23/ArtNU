import React, { useEffect, useState } from "react";
import { useUser } from "../context/AuthContext";
import SignIn from "./SignIn";
import { Typography, Box, TextField, Button, Card, CardHeader, CardContent, Avatar } from "@mui/material";
import { Navbar } from "./navbar";
import { Alert } from "@mui/material";
import { addUser } from "../firebase";
import { posts_data } from "../firebase.js";
import {Post} from "./post.js" ;



export function Profile() {
  const { user, signIn, signOut } = useUser();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [uid, setUID] = useState("");
  const [major, setMajor] = useState("");
  const [year, setYear] = useState("");
  const [interests, setInterests] = useState("");
  const [hometown, setHometown] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showAddInfo, setShowAddInfo] = useState(true)

  const [posts, setPosts] = useState([])

  useEffect(() => {
    //console.log(user);
    if (user) {
      setDisplayName(user.displayName);
      setEmail(user.email);
      setUID(user.uid);
    }
  }, [user]);


  function filterByID(post){
    console.log("user", user)
    if (post.uid && user && post){
      if (post.uid == user.uid){
        console.log("FOUND A MATCH")
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
    //console.log(displayName, email, uid, major, year);
    addUser(uid, displayName, major, year, interests, hometown)
    //console.log(uid)
    setShowAlert(true);
    setShowAddInfo(false);
  };

  const closeAddInfoPopUp = () => {
    setShowAddInfo(false);
  }

  if (!user) {
    return <SignIn />;
  }

  console.log(posts)

  //let user_posts = posts.filter(post => post.uid == user.uid)
  // useEffect(()=>{
  //   let user_posts = []
  //   for (let key in posts){
  //     const p = posts[key]
  //     if (p.uid == user.uid){
  //       user_posts.push(p)
  //     }
  //   }
  //   setPosts(user_posts)
  // }, []);
  

return (
  <div className = "profile-page">
    <Navbar/>
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
                  value={major}
                  onChange={(e) => setMajor(e.target.value)}
                />
              </Box>
              <Box sx={{ bgcolor: "background.paper", p: 2 }}>
                <TextField
                  label="Year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </Box>
              <Box sx={{ bgcolor: "background.paper", p: 2 }}>
                <TextField
                  label="Interests"
                  value={interests}
                  onChange={(e) => setInterests(e.target.value)}
                />
              </Box>
              <Box sx={{ bgcolor: "background.paper", p: 2 }}>
                <TextField
                  label="Hometown"
                  value={hometown}
                  onChange={(e) => setHometown(e.target.value)}
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
        <h1>{user.displayName}</h1>
        <h2>{user.major}</h2>
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
);

}
