import React, {useEffect, useRef, useState} from "react";
import ResizeObserver from 'resize-observer-polyfill';
import './Pagination.css'

const Pagination = () => {
    const items = [
        'all',
        'new games',
        'lotto',
        'popular',
        'popular 2020',
        'top',
        'top 2020'
    ]

    const listRef = useRef(null);
    const itemRef = useRef(null);
    const [value, setValue] = useState(0);
    const [val, setVal] = useState(0);
    const [paginationListValue, setPaginationListValue] = useState(0);

    useEffect(() => {

        const resizeListObserver = new ResizeObserver((entries) => {
            // console.log('resizeObserver => .Pagination-list width: ', entries.map(x => x.target.clientWidth));
            // @ts-ignore
            setPaginationListValue(entries.map(x => x.target.clientWidth))
        });
        // @ts-ignore
        resizeListObserver.observe(listRef.current);


        if (value === 0) {
            // @ts-ignore
            let computedWidth = Number.parseInt(window.getComputedStyle(listRef.current, null).width);
            setValue(computedWidth);
        }


        if (val === 0) {
            // @ts-ignore
            let computedWidth = Number.parseInt(window.getComputedStyle(itemRef.current, null).width);
            setVal(computedWidth);
        }


    }, [value, val]);


    const renderItems = () => items.map(item => {


        return (
            <div ref={itemRef} key={Math.floor(Math.random() * 90000)} className="Pagination-items">
                {item}
            </div>)
    })

    return (
        <>
            <div className="Pagination">
                <div className="Pagination-controls left">&lsaquo;</div>
                <div ref={listRef} className="Pagination-list">
                    {renderItems()}
                </div>
                <div className="Pagination-controls right">&rsaquo;</div>
            </div>

            <div>{paginationListValue}</div>
            <div>{val}</div>
        </>
    )
}

export default Pagination