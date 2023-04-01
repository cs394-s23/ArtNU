import { readPosts } from "../firebase.js";
import {useState} from "react";



export function Posts(){ 
const data = readPosts().then((data) => {
    console.log(data)
    return data
})

const [posts, setPosts] = useState(data);
 console.log(posts)
return (

    <div>
        <h1>Posts</h1>
    </div>

)
}