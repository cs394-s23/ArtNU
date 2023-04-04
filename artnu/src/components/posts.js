import { readPosts } from "../firebase.js";
import {useState} from "react";
import {Post} from "./post.js"

function Post2Html() {
    
};

export function Posts(){ 
    const [posts, setPosts] = useState([])
    const dp = readPosts()
        .then(data => {

            setPosts(data)

        })

 
    return (
        
        <div>
            {posts.map((post) => (
                <Post
                img={post.img}
                author={post.author}
                likes={post.likes}
                price={post.price}/>
            ))}
           
        </div>


    )
    }