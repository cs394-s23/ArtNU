import React, { useEffect, useState } from "react";
import { useUser } from "../context/AuthContext";
import SignIn from "./SignIn";
import { Typography, Box } from "@mui/material";
import { Navbar } from "./navbar";

export function Profile() {
    const { user, signIn, signOut } = useUser();
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [uid, setUID] = useState("");

    useEffect(() => {
        console.log(user)
        if (user) {
            setDisplayName(user.displayName);
            setEmail(user.email);
            setUID(user.uid);
        }
    }, [user]);

    if (!user) {
        return <SignIn />;
    }

    return (
        <div>
        <Navbar/>
        <Box sx={{ m: 2 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>User Profile</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Box sx={{ bgcolor: "background.paper", p: 2 }}>
                    <Typography variant="h6">{displayName}</Typography>
                </Box>
                <Box sx={{ bgcolor: "background.paper", p: 2 }}>
                    <Typography variant="subtitle1">{email}</Typography>
                </Box>
                <Box sx={{ bgcolor: "background.paper", p: 2 }}>
                    <Typography variant="subtitle2">{uid}</Typography>
                </Box>
            </Box>
        </Box>
        </div>
    )
}
