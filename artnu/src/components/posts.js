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
        setInitialData(data)
        setPosts(data)
    })}, []
    )
    
    function handleFilter(filterType) {
        setFilter(filterType)
    }
    
    
    useEffect(()=>{
        console.log(filter)
        if (filter === "All Art") {
            setPosts(initialData)
            return
        }
        let filteredPosts = initialData.filter(post => post.medium == filter)
        if (filter == "Commission") {
            filteredPosts = []
            initialData.forEach(element => {
                if(element["tags"]) {
                    element["tags"].forEach(tag => {
                        if (tag == "Commission") {
                            filteredPosts.push(element)
                        }
                    });
                    // if ("Commission" in element["tags"]) {
                    //     console.log("ADDING")
                    //     filteredPosts.push(element)
                    // }
                    console.log(element["tags"])
                }
            });
        }
        console.log(filteredPosts)
        setPosts(filteredPosts)
    }, [filter])

    return (
        
        <div className="feed">
        <Filters changeFilter={handleFilter}/>
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
                    title = {post.title}/>
                </>
            ))}
           
        </div>
        </div>
        


    )
    }