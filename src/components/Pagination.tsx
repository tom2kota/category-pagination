import React from "react";
import './Pagination.css'

export const Pagination = () => {
    const items = [
        'all',
        'new games',
        'lotto',
        'popular',
        'popular 2020',
        'top',
        'top 2020'
    ]
    return (
        <div className="Pagination">
            <div className="Pagination-controls left">&lsaquo;</div>
            <div className="Pagination-list">
                {items.map(item => <div key={Math.floor(Math.random() * 1000)}
                                        className="Pagination-items">{item}</div>)}
            </div>
            <div className="Pagination-controls right">&rsaquo;</div>
        </div>
    )
}