import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useUser } from "../context/AuthContext";
import { db } from "../firebase";
import { doc, get } from "firebase/firestore";
import { addUser } from "../firebase";
import { useNavigate } from "react-router-dom";



function SignIn() {
  const { user, signIn, signOut } = useUser();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  //export user id to be used in other components
  console.log("back here")
  



  useEffect(() => {
    setLoading(true);
    if (user) {  
      addUser(user.uid, user.displayName)
        .then(() => {
          console.log('added user', user.uid, user.displayName);
          setLoading(false);
          
         
     

        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
        navigate ("/ArtNU/Home");

    } else {
      setLoading(false);
    }

  }, [navigate, user]);

  if (loading) {
    console.log("loading")
    return <div>Loading...</div>;
  }

if (!loading){


  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#8e44ad",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
              borderRadius: "10px",
              backgroundColor: "white",
            }}
          >
            <h2 style={{ color: "#8e44ad" }}>Welcome to NU Art!</h2>

            <h2>Sign In</h2>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                bgcolor: "#fff",
                color: "#757575",
                "&:hover": {
                  bgcolor: "#f4f4f4",
                },
              }}
              onClick={signIn}
            >
              Sign In with Google
            </Button>
          </div>
        </div>
      
    </div>
  );
            }
}

export default SignIn;
