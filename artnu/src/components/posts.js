import { readPosts } from "../firebase.js";
import {useState} from "react";

function handlePosts() {
    readPosts().then(function(posts) {
        const postsDict = {};
        posts.forEach((post) => {
          postsDict[post.id] = post;
        });
        return postsDict
     }).catch(function(error) {
        console.log(error);
     });
    }

export function Posts(){ 
    const [posts, setPosts] = useState(handlePosts());
    console.log(posts)
    return (
        <div>
           {posts.map(post => (
                <div>
                    {post.img}
                </div>
        ))}
            <h1>Posts</h1>
        </div>

    )
    }