import React, { Component } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/menu.css"

class Search extends Component {
    
    render = () => {
        return (
            <div className="search-form">
                <input placeholder="Search Here ..."></input>
                <div className="button-search">
                    <FontAwesomeIcon style={{"color": "white", "fontSize": "16pt"}} icon="search" />
                </div>
            </div>  
        )
    }
}

export default Search;