import React, { Component } from "react";
import "../styles/menu.css";

class Menu extends Component {

    render = () => {
        return (
            <div className="menu-button">
                 {this.props.menu}
            </div>
        )
    }
}

export default Menu;