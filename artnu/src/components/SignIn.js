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
        </>
      )}
    </div>
  );
}

export default SignIn;
