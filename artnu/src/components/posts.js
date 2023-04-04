import { posts_data } from "../firebase.js";
import {useState, useEffect} from "react";
import {Post} from "./post.js" ;
import {Filters} from "./filters.js";


// function Post2Html() {
    
// };



export function Posts(){

    const [initialData, setInitialData] = useState([])
    const [filter, setFilter] = useState("All Art");
    const [posts, setPosts] = useState([])


    useEffect(() =>{ // initialize THIS ONLY ONCE
    const dp = posts_data
    .then(data => {
        console.log(data, "initial data")
        setInitialData(data)
        setPosts(data)
    })}, []
    )
    
    function handleFilter(filterType) {
        console.log(filterType, "NEW FILTER TYPE")
        setFilter(filterType)
    }
    
    
    useEffect(()=>{
        console.log(filter)
        if (filter === "All Art") {
            setPosts(initialData)
            return
        }
        let filteredPosts = initialData.filter(post => post.medium == filter)
        console.log(filteredPosts)
        filteredPosts.forEach(element => {
            console.log(element)
        });
        setPosts(filteredPosts)
    }, [filter])

    return (
        <>
        <Filters changeFilter={handleFilter}/>
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
        </>


    )
    }