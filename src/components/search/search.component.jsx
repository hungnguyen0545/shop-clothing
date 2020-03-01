import React from 'react'

import './search.style.scss'

const SearchBar = () => {
    return(
        <div className="search-box">
            <div className="search-bar">
               <input type="text" className="search-text" placeholder="Search name item you want to find"></input>
                <button className="search-btn">
                <img src="https://img.icons8.com/dusk/64/000000/search.png" alt="search item"/>
                </button>
            </div>
        </div>
    );
}
export default SearchBar