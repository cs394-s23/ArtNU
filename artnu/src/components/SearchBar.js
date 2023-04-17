/*import {Posts} from './posts.js';
import {useState, useEffect} from "react";
import { posts_data } from "../firebase.js";
import React, {Component} from "react";

export default function SearchBar() {
    const [initialData, setInitialData] = useState([])
    const [posts, setPosts] = useState([])
    const [query, setQuery] = useState([])

    useEffect(() =>{ // initialize THIS ONLY ONCE
        const dp = posts_data
        .then(data => {
            setInitialData(data)
            setPosts(data)
        })}, []
    );
    useEffect(()=>{
        setPosts(initialData)
    }, [])

    const handleInput = (event) => {
        setQuery(event.target);
    }

    return (
        <>
        <div className = "searchbar">
            <input
                type = "text"
                className = "searchbar"
                placeholder = "Search"
                value = {query}
                onChange = {handleInput}
                />
            <button type="submit" className = "searchbutton" onClick={handleInput}>Search</button>            
        </div>
        <div class = "search-contents"> 
            <p> {query}</p>
        </div>
        </>
    );
};
*/


