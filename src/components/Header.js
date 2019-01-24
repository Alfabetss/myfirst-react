import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/header.css';
import { Link } from "react-router-dom";

class Header extends Component {
    
    render() {
        const userName = this.props.userData.name
        const accountBalance = this.props.userData.balance
        return (
            <div className="header">
                <div className="container">
                    <div className="logo">
                        <Link to="/">TokoFlix</Link>
                    </div>
                    <div className="menu-container">
                        <div className="section">
                            <Link to="/movie/history">
                                <FontAwesomeIcon style={{"color": "white", "fontSize": "16pt"}} icon="film" /> History
                            </Link>
                        </div>
                        <div className="section">
                            <FontAwesomeIcon style={{"color": "white", "fontSize": "16pt"}} icon="user-circle"/> {userName}
                        </div>
                        <div className="section">
                            <FontAwesomeIcon style={{"color": "white", "fontSize": "16pt"}} icon="wallet"/> Rp.{new Intl.NumberFormat('ID').format(accountBalance)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Header;