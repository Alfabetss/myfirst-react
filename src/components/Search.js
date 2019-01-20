import React, { Component } from "react"
import "../styles/menu.css"

class Search extends Component {
    
    render = () => {
        return (
            <div className="search-form">
                <input placeholder="Search Here ..."></input>
                <div className="button-search">Search</div>
            </div>  
        )
    }
}

export default Search;