import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { getUserById } from "../firebase.js";
import { Navbar } from "./navbar";
import { Post } from "./post.js";
import { useUser } from "../context/AuthContext.js";
import { posts_data } from "../firebase.js";



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
        <div>
            
            <Navbar />
            <h1>{userData.author}'s Profile</h1>
            <p> Major: {userData.major}</p>
            <div>
    Posts should be below
    <div className="feed">
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

        </div>
    );
};

