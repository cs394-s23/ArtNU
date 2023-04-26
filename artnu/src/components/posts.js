import {useState, useEffect} from "react";
import {Post} from "./post.js" ;
import {Filters} from "./filters.js";
import {getDoc} from "firebase/firestore";
import { db } from "../firebase.js";
import { onSnapshot, query, collection, orderBy } from "firebase/firestore";



export function Posts(){

    const [initialData, setInitialData] = useState([])
    const [filter, setFilter] = useState("All Art");
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const unsubscribe = onSnapshot(
          query(collection(db, "posts"), orderBy("date", "desc")),
          (snapshot) => {
            const postsData = snapshot.docs.map((doc) => ({
              ...doc.data(),
              ref: doc.ref,
              id: doc.id,
            }));
            setPosts(postsData);
          }
        );
        return unsubscribe;
      }, []);

    // useEffect(() =>{ // initialize THIS ONLY ONCE
    // const dp = posts_data
    // .then(data => {
    //     setInitialData(data)
    //     setPosts(data)
    // })}, []
    // )
    
    function handleFilter(filterType) {
        setFilter(filterType)
    }
    
    useEffect(()=>{
        console.log(filter)
        if (filter === "All Art") {
            setPosts([...posts])
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
        // console.log(filteredPosts)
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
                        // getUser = {getUser} 
                        // userRef = {post.user} 
                        uid={post.uid}
                    />
                </>
            ))}
        </div>
        </div>
        


    )
    }