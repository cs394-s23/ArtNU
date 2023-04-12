import { posts_data } from "../firebase.js";
import {useState, useEffect} from "react";
import {Post} from "./post.js" ;
import {Filters} from "./filters.js";
import {getDoc} from "firebase/firestore";

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

    async function getUser(userRef) {
        const ref = await getDoc(userRef);
        console.log(ref.data());
        return ref.data();
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
                    console.log(element["tags"])
                }
            });
        }
        console.log(filteredPosts)
        setPosts(filteredPosts)
    }, [filter])

    return (
        
        <div className="feed">
        <div className="filters">
            <Filters changeFilter={handleFilter}/>
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
                        getUser = {getUser} 
                        userRef = {post.user} 
                    />
                </>
            ))}
           
        </div>
        </div>
        


    )
    }