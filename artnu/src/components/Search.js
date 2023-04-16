import user from './icons/user.png'
import paw from './icons/paw.png'
import {Navbar} from './navbar.js'
import SearchBar from './SearchBar';
import {useState, useEffect} from "react";
import { posts_data } from "../firebase.js";


export default function Search() {

    const [initialData, setInitialData] = useState([])
    const [posts, setPosts] = useState([])

    useEffect(() =>{ // initialize THIS ONLY ONCE
        const dp = posts_data
        .then(data => {
            setInitialData(data)
            setPosts(data)
        })}, []
    )
    useEffect(()=>{
        setPosts(initialData)
    }, [])
    
    return (
        <>
        <header>
          <div className="logo">
            <img src={paw}></img>
            <span>NU Art</span>
          </div>
          <span className="page-title">Explore</span>
            <a>
              <img src={user} class="user"></img>
            </a>
        </header>

        <main>
            <SearchBar/>
            <aside>
                <Navbar/>
            </aside>
        </main>
        </>
    );
}