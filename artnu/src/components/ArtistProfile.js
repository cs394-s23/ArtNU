import React, { useEffect, useState } from "react";
import { user_list } from "../firebase.js"
import { useParams } from 'react-router-dom'
import 'firebase/firestore';


export function ArtistProfile() {
    const [userData, setUserData] = useState(null)

    const { id } = useParams();

    console.log("user id", id)

    // function filterByID(user){
    //     console.log("FILTERING")
    //     if (user.id == userId){
    //         return true
    //     } else { return false}
    // };

    console.log(user_list)


    useEffect(() => {
        console.log("Inside useEFFECT")
        // const getUserData = async () => {
        //     const user_list_data = await user_list;
        //     const doc = await user_list_data.doc(userId).get();
        //     setUserData(doc.data());
        // }
        // getUserData();
        const fetchUserData = async () => {
            try {
                const userRef = firestore.collection('users').doc(id);
                const userData = await userRef.get();
                if(userData.exists) {
                    setUserData(userData.data());
                } else {
                    console.log("no user found with id ${id}")
                }
            } catch (error) {
                console.error("error fetching user data");
            }
        };
        fetchUserData();
    }, [id]);



    console.log("users", userData)

    return (
        <div>
            <h1>Profile</h1>
            <p> Major:</p>
        </div>
    );
};

