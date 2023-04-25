import React, {useState, useEffect} from 'react';
import firebase from "firebase/app";
import "firebase/firestore";
import { Link } from 'react-router-dom';
import { user_list } from "../firebase.js"
import { ArtistCard } from './artistCard.js';


export function UserList(){
    const [userList, setUserList] = useState([]);


    useEffect(() => {
        const dp = user_list
        .then(data => {
            let user = data
            setUserList(user)
        })
    }, [])

    return (
        <>
        <div>
            <h1> Featured NU Artists</h1>
            <div className = "artistfeed">
                {userList.map(user => (
                    <>
                    <ArtistCard
                        author = {user.author}
                        hometown = {user.hometown}
                        interests = {user.interests}
                        major = {user.major}
                        year = {user.year}
                        uid = {user.id}
                    />

                    </>
                ))}
            </div>
        </div>
        </>
    );
};