import React, { useEffect, useState } from "react";
import { useUser } from "../context/AuthContext";
import SignIn from "./SignIn";
import { Typography, Box, TextField, Button, Card, CardHeader, CardContent, Avatar } from "@mui/material";
import { Navbar } from "./navbar";
import { Alert } from "@mui/material";
import { addUser } from "../firebase";

export function Profile() {
  const { user, signIn, signOut } = useUser();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [uid, setUID] = useState("");
  const [major, setMajor] = useState("");
  const [year, setYear] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    console.log(user);
    if (user) {
      setDisplayName(user.displayName);
      setEmail(user.email);
      setUID(user.uid);
    }
  }, [user]);

  const handleSave = () => {
    // You can send the updated parameters to a backend server or update them in the local state.
    console.log(displayName, email, uid, major, year);
    addUser(uid, displayName, major, year, true)
    console.log(uid)
    setShowAlert(true);
  };

  if (!user) {
    return <SignIn />;
  }

return (
  <div>
    <Navbar />
    <Box sx={{ m: 2, display: "flex", justifyContent: "center" }}>
      <Card sx={{ width: 500 }}>
                  <Typography variant="h5" sx={{ mb: 2 }}>
            User Profile
          </Typography>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "primary.main" }}>
              {displayName[0]}
            </Avatar>
          }
          title={displayName}
          subheader={email}
        />
        <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ bgcolor: "background.paper", p: 2 }}>
              <TextField
                label="Display Name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </Box>
            <Box sx={{ bgcolor: "background.paper", p: 2 }}>
              <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            {/* <Box sx={{ bgcolor: "background.paper", p: 2 }}>
          <TextField
            label="UID"
            value={uid}
            disabled
            InputProps={{ readOnly: true }}
          />
        </Box> */}
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
);

}
