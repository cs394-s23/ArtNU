import React, { useState } from 'react';
import {Posts} from './posts.js';

const SearchBar = () => (

        <div className = "searchbar">
            <form action="/" method = "get">
            <input
                type = "text"
                className = "searchbar"
                placeholder = "Search"
                name = "s"
                />
            <button type="submit" className = "searchbutton">Search</button>
            </form>
            
        </div>
);

export default SearchBar;


