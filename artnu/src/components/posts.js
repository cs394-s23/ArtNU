import { readPosts } from "../firebase.js";
import {useState} from "react";

export function Posts(){ 
    const [posts, setPosts] = useState([])
    const dp = readPosts()
        .then(data => {

            setPosts(data)

        })

 
    return (
        
        <div>
            {posts.map((post) => (
                <h1> {post.caption}</h1>
            ))}
           
        </div>


    )
    }