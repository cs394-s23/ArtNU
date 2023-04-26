import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { getUserById } from "../firebase.js";
import { Navbar } from "./navbar";
import { Post } from "./post.js";
import { useUser } from "../context/AuthContext.js";
import { posts_data } from "../firebase.js";
import paw from './icons/paw.png';
import user_img from './icons/user.png';




export function ArtistProfile() {
    const {user} = useUser()
    const [posts, setPosts] = useState([])

    const [userData, setUserData] = useState(null)

    const { id } = useParams();

    let userF = getUserById(id)

    function filterByID(post){
        console.log("user", user)
        if (post.uid && user && post){
          if (post.uid == id){
            console.log("FOUND A MATCH")
            return true
          }
          else {
            return false
          }
        }
      }

    console.log("id", id)
    console.log("user", userF)

    useEffect(() => {
        async function fetchData() {
            const user = await getUserById(id)
            setUserData(user)
        }
        fetchData();
    }, [id])

    useEffect(() =>{ // initialize THIS ONLY ONCE
        const dp = posts_data
        .then(data => {
            let user_posts = data.filter(filterByID)
            setPosts(user_posts)
        })}, [user]
      )

   console.log(userData)

    // function filterByID(user){
    //     console.log("FILTERING")
    //     if (user.id == userId){
    //         return true
    //     } else { return false}
    // };



    // useEffect(() => {
    //     console.log("Inside useEFFECT")
    //     // const getUserData = async () => {
    //     //     const user_list_data = await user_list;
    //     //     const doc = await user_list_data.doc(userId).get();
    //     //     setUserData(doc.data());
    //     // }
    //     // getUserData();
    //     const fetchUserData = async () => {
    //         try {
    //             const userRef = firestore.collection('users').doc(id);
    //             const userData = await userRef.get();
    //             if(userData.exists) {
    //                 setUserData(userData.data());
    //             } else {
    //                 console.log("no user found with id ${id}")
    //             }
    //         } catch (error) {
    //             console.error("error fetching user data");
    //         }
    //     };
    //     fetchUserData();
    // }, [id]);

    if(!userData) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <div className = "profile-page">
        <Navbar />        
        <div className="profile">
      <div className="user-info">
        <div className="profile-pic">
          {userData.pic!="null" && <img src={"https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png"}></img>}
        </div>
        <div className="rest">
          <h1>{userData.author}</h1>
          {userData.major!="null" && <h2 className="major">{userData.major} Major</h2>}
          {userData.hometown!="null" && <h3>Hometown: {userData.hometown}</h3> }
          {userData.interests!="null" && <h3>Interests: {userData.interests}</h3> }
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
        {posts.length==0 && 
        <h2>This artist does not have items for sale yet!</h2>}
        </div>
        </div>
        </div>
        </>
    );
};

