import React from "react";
import './Pagination.css'

export const Pagination = () => {
    return (
        <div className="Pagination">
            <div className="Pagination-controls left">&lsaquo;</div>
            <div className="Pagination-list">
                <div className="Pagination-items">all</div>
                <div className="Pagination-items">new games</div>
                <div className="Pagination-items">lotto</div>
                <div className="Pagination-items">popular</div>
                <div className="Pagination-items">popular 2020</div>
                <div className="Pagination-items">top</div>
                <div className="Pagination-items">top 2020</div>
            </div>
            <div className="Pagination-controls right">&rsaquo;</div>
        </div>
    )
}