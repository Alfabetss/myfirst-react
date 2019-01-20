import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/pagination.css"

class Pagination extends Component {

    render = () => {
        return (
            <div className="pagination-container">
                <div className="pagination">
                    <a href="#"><FontAwesomeIcon icon="chevron-left" /></a>
                    <a href="#" className="active">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#"><FontAwesomeIcon icon="chevron-right" /></a>
                </div>
            </div>
        )
    }
}

export default Pagination;