import React from "react";
import { Button } from "@mui/material";
import { useUser } from "../context/AuthContext";

function SignIn() {
  const { user, signIn, signOut } = useUser();
  console.log(user)
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
      {user ? (
        <>
          <h2>You are logged in as {user.displayName}</h2>
          <Button variant="contained" sx={{ mt: 2 }} onClick={signOut}>
            Sign Out
          </Button>
        </>
      ) : (
        <>

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#8e44ad' }}>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', borderRadius: '10px', backgroundColor: 'white' }}>
    <h2 style={{ color: '#8e44ad' }}>Welcome to NU Art!</h2>

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
        </>
      )}
    </div>
  );
}

export default SignIn;
