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


    const itemRef = useRef(null);

    const [value, setValue] = useState(0);

    useEffect(() => {


        const resizeObserver = new ResizeObserver((entries) => {
            console.log('resizeObserver => .Pagination-list width: ', entries.map(x => x.target.clientWidth));
        });

        // @ts-ignore
        resizeObserver.observe(itemRef.current);

        if (value === 0) {

            // @ts-ignore
            let computedWidth = Number.parseInt(window.getComputedStyle(itemRef.current, null).width)
            setValue(computedWidth);

        }
    }, [value]);


    return (

        <>
            <div className="Pagination">

                <div className="Pagination-controls left">&lsaquo;</div>


                <div ref={itemRef} className="Pagination-list">
                    {items.map(item => <div key={Math.floor(Math.random() * 10000)}
                                            className="Pagination-items">{item}</div>)}
                </div>

                <div className="Pagination-controls right">&rsaquo;</div>
            </div>
            <div>
                <button onClick={() => setValue(0)}>
                    <div>value: {value}</div>
                </button>
            </div>


        </>
    )
}

export default Pagination