import React, {useState, useEffect} from 'react';
import firebase from "firebase/app";
import "firebase/firestore";
import { Link } from 'react-router-dom';
import { user_list } from "../firebase.js"
import ArtistProfile from "./ArtistProfile.js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


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
            <h1> User List</h1>
            <ul>
                {userList.map(user => (
                    <li key={user.id}>
                        <Link to={`../ArtNU/${user.id}`}>{user.author}</Link>
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
};