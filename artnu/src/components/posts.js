import { posts_data } from "../firebase.js";
import {useState, useEffect} from "react";
import {Post} from "./post.js" ;
import {Filters} from "./filters.js";


// function Post2Html() {
    
// };



export function Posts(){

    const [filter, setFilter] = useState("All Art");
    const handleFilter = (e) => {
        const filter = e.target.value;
        console.log(filter)
        setFilter(filter);
    }

        
    
    const [posts, setPosts] = useState([])
    const dp = posts_data
    .then(data => {
        setPosts(data)
    })
    return (
        <>
        <Filters handleFilter={handleFilter}/>
        <div className = "post-grid">

            {posts.filter(post => post.medium == filter ).map((post) => (
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
        </>


    )
    }