import React, { Component } from 'react';
import Menu from "./Menu";
import Search from "./Search";
import '../styles/header.css';

class Header extends Component {
    
    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="logo">
                        <a>TokoFlix</a>
                    </div>
                    <div className="menu-container">
                        <Menu menu="Wishlist"></Menu>
                        <Menu menu="Topup"></Menu>
                        <Menu menu="History"></Menu>
                    </div>
                    <div className="search-container">
                        <Search></Search>
                    </div>
                </div>
            </div>
        )
    }

}

export default Header;