import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Menu from "./Menu";
import Search from "./Search";
import * as utils from "../utils/utils";
import '../styles/header.css';

class Header extends Component {
    
    render() {
        const userName = this.props.userData.name
        const accountBalance = this.props.userData.balance
        return (
            <div className="header">
                <div className="container">
                    <div className="logo">
                        <a href="/">TokoFlix</a>
                    </div>
                    <div className="menu-container">
                        <div className="section">
                            <FontAwesomeIcon style={{"color": "white", "fontSize": "16pt"}} icon="user-circle"/> {userName}
                        </div>
                        <div className="section">
                            <FontAwesomeIcon style={{"color": "white", "fontSize": "16pt"}} icon="wallet"/> Rp.{new Intl.NumberFormat('ID').format(accountBalance)}
                        </div>
                        {/* <Menu menu="Wishlist"></Menu>
                        <Menu menu="Topup"></Menu>
                        <Menu menu="History"></Menu> */}
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