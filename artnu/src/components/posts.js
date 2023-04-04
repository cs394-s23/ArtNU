import { posts_data } from "../firebase.js";
import {useState} from "react";
import {Post} from "./post.js"

// function Post2Html() {
    
// };


export function Posts(){
    const [filter, setFilter] = useState("All Art");
    
    const [posts, setPosts] = useState([])
    const dp = posts_data
    .then(data => {
        setPosts(data)
    })
    return (
        
        <div className = "post-grid">
            {posts.map((post) => (
                <>
                    <Post
                    key = {post.ref}
                    img={post.img}
                    author={post.author}
                    likes={post.likes}
                    price={post.price}/>
                </>
            ))}
           
        </div>


    )
    }